from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine
import models
import schemas
from auth import hash_password, verify_password

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Register
@app.post("/register")
def register(user: schemas.RegisterSchema, db: Session = Depends(get_db)):

    existing_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_user = models.User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()

    return {
        "message": "User registered successfully"
    }


# Login
@app.post("/login")
def login(user: schemas.LoginSchema, db: Session = Depends(get_db)):

    db_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if not db_user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email"
        )

    if not verify_password(user.password, db_user.password):
        raise HTTPException(
            status_code=400,
            detail="Invalid password"
        )

    return {
        "message": "Login successful",
        "user": {
            "id": db_user.id,
            "username": db_user.username,
            "email": db_user.email
        }
    }


# Add activity
@app.post("/activities")
def add_activity(
    activity: schemas.ActivitySchema,
    db: Session = Depends(get_db)
):

    new_activity = models.Activity(
        name=activity.name,
        activity=activity.activity,
        hours=activity.hours
    )

    db.add(new_activity)
    db.commit()

    return {
        "message": "Activity added"
    }


# Get activities
@app.get("/activities")
def get_activities(db: Session = Depends(get_db)):

    activities = db.query(models.Activity).all()

    return activities