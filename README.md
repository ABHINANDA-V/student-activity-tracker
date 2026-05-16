# Student Activity Tracker

A modern full-stack dashboard application built using React and FastAPI for tracking student activities, hours, and analytics.

---

# Features

## Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes

## Dashboard

* Summary Cards
* Activity Analytics Chart
* Recent Activities Section
* Responsive Dashboard Layout

## Activity Management

* Add Activity
* Delete Activity
* Activity Table
* Activity Summary

## UI Features

* Responsive Sidebar
* Mobile Menu Toggle
* Dashboard Layout
* Professional Navy Blue Theme
* Tailwind CSS Styling

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Tailwind CSS
* TanStack Query
* Axios
* Recharts
* React Hot Toast
* React Icons

## Backend

* FastAPI
* SQLAlchemy
* SQLite
* JWT Authentication
* Passlib Bcrypt
* Uvicorn

---

# Project Structure

```bash
student-activity-tracker/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation

## Backend Setup

### 1. Navigate to backend

```bash
cd backend
```

### 2. Create virtual environment

```bash
python -m venv venv
```

### 3. Activate virtual environment

#### Windows

```bash
venv\Scripts\activate
```

#### Mac/Linux

```bash
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Run backend server

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

### 1. Navigate to frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register user |
| POST   | /login    | Login user    |

---

## Activities

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /activities      | Get all activities |
| POST   | /activities      | Add activity       |
| DELETE | /activities/{id} | Delete activity    |

---

## Summary

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| GET    | /summary | Get dashboard summary |

---

# Dashboard Features

## Summary Cards

Displays:

* Total Activities
* Total Hours
* Most Active User

## Analytics Chart

Displays student activity hours using Recharts.

## Recent Activities

Shows latest student activities in dashboard.

---

# Responsive Design

The application is fully responsive and supports:

* Desktop View
* Tablet View
* Mobile View

Features include:

* Mobile Sidebar Toggle
* Responsive Dashboard Grid
* Responsive Tables

---

# Future Improvements

* Edit Activity Feature
* Search & Filter
* Pagination
* Dark Mode
* User Profile
* Activity Categories
* Export Reports

---

# Author

Developed by Abhinanda.

---

# License

This project is developed for internship assessment and learning purposes.
