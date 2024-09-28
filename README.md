# Todolist in Pernstack

A todolist app that implements basic crud operations using pernstack

## Features

- Display list of todos
- Create a todo item
- Delete a todo item
- Update a todo item

## Platform and Technologies

- Database - Postgresql
- Backend - Nodejs and Express
- Frontend - React and Tailwindcss

## INSTALLATION

1. clone the repo

```bash
git clone https://github.com/kimicasamina/simple-crud-pernstack.git
```

2. Navigate to the project directory:

```bash
cd simple-crud-pernstack
```

3. Install dependencies:

```bash
npm install && cd client && npm install
```

## App Configuration

Create a Database: Open your Terminal and create a new database:

```bash
sudo -u postgres psql
```

```postgresql
CREATE DATABASE todo;
```

```postgresql
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)
```

Create .env file at the root folder and add these variables

```env
HOST=localhost
DATABASE=todo
USER=postgres
PASSWORD=postgres
PORT=8000
```
