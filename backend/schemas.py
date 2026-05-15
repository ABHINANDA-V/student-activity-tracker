from pydantic import BaseModel

class RegisterSchema(BaseModel):
    username: str
    email: str
    password: str


class LoginSchema(BaseModel):
    email: str
    password: str


class ActivitySchema(BaseModel):
    name: str
    activity: str
    hours: int