from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import Optional
from typing import List
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Добавляем middleware для CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        username TEXT UNIQUE NOT NULL,
                        email TEXT UNIQUE NOT NULL,
                        password TEXT NOT NULL,
                        plan TEXT NOT NULL,
                        favoriteMovies TEXT
                      )''')
    conn.commit()
    conn.close()

init_db()

class User(BaseModel):
    username: str
    email: EmailStr
    password: str
    plan: str
    favoriteMovies: List[int]

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    favoriteMovies: Optional[List[int]] = None

@app.post("/users/")
def create_user(user: User):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, email, password, plan, favoriteMovies) VALUES (?, ?, ?, ?, ?)",
                       (user.username, user.email, user.password, user.plan, ",".join(map(str, user.favoriteMovies))))
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        raise HTTPException(status_code=400, detail="Username or email already exists")
    conn.close()
    return {"message": "User created successfully"}

@app.get("/users/{username}")
def get_user(username: str):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT username, email, plan, favoriteMovies FROM users WHERE username = ?", (username,))
    user = cursor.fetchone()
    conn.close()
    if user:
        return {"username": user[0], "email": user[1], "plan": user[2], "favoriteMovies": list(map(int, user[3].split(","))) if user[3] else []}
    raise HTTPException(status_code=404, detail="User not found")

@app.get("/users/")
def get_all_users():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT username, email, plan, favoriteMovies FROM users")
    users = cursor.fetchall()
    conn.close()
    return [{"username": user[0], "email": user[1], "plan": user[2], "favoriteMovies": list(map(int, user[3].split(","))) if user[3] else []} for user in users]

@app.post("/users/login")
def get_user_by_email(user: UserLogin):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT username, email, plan, favoriteMovies FROM users WHERE email = ? AND password = ?", (user.email, user.password))
    user_data = cursor.fetchone()
    conn.close()
    if user_data:
        return {"username": user_data[0], "email": user_data[1], "plan": user_data[2], "favoriteMovies": list(map(int, user_data[3].split(","))) if user_data[3] else []}
    raise HTTPException(status_code=404, detail="Invalid email or password")

@app.put("/users/{email}")
def update_user(email: str, user_update: UserUpdate):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()

    # Проверяем, существует ли пользователь
    cursor.execute("SELECT username, favoriteMovies, plan FROM users WHERE email = ?", (email,))
    user_data = cursor.fetchone()

    if not user_data:
        conn.close()
        raise HTTPException(status_code=404, detail="User not found")

    # Обновляем username, если передан новый
    new_username = user_update.username if user_update.username else user_data[0]

    # Обновляем favoriteMovies, если передан новый список
    new_favorite_movies = ",".join(map(str, user_update.favoriteMovies)) if user_update.favoriteMovies is not None else user_data[1]

    # Обновляем план, если передан новый
    new_plan = user_update.plan if user_update.plan else user_data[2]

    try:
        cursor.execute("UPDATE users SET username = ?, favoriteMovies = ?, plan = ? WHERE email = ?", 
                       (new_username, new_favorite_movies, new_plan, email))
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        raise HTTPException(status_code=400, detail="Username already exists")

    conn.close()
    return {"message": "User updated successfully"}