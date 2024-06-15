from flask import Flask, request, redirect, render_template_string
import json
import os

app = Flask(__name__)
DATA_FILE = 'users.json'

def load_users():
    if not os.path.exists(DATA_FILE):
        return {}
    with open(DATA_FILE, 'r') as file:
        return json.load(file)

def save_users(users):
    with open(DATA_FILE, 'w') as file:
        json.dump(users, file)

@app.route('/')
def index():
    return render_template_string(open('index.html').read())

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    users = load_users()
    if username in users:
        return "Username already exists. Please choose a different username."
    users[username] = password
    save_users(users)
    return "Registration successful! You can now log in."

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    users = load_users()
    if username not in users:
        return "Username not found. Please register first."
    if users[username] != password:
        return "Incorrect password. Please try again."
    return "Login successful!"

if __name__ == '__main__':
    app.run(debug=True)
