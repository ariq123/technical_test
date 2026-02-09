# 🚀 User Management REST API

REST API sederhana untuk mengelola data user menggunakan **Node.js,
Express, Sequelize, dan Joi Validation**.

Project ini dibuat menggunakan arsitektur **MVC (Model - View -
Controller)** untuk menjaga struktur kode tetap scalable dan mudah
di-maintain.

------------------------------------------------------------------------

## 📌 Features

✅ Create User\
✅ Get All Users (Pagination & Search)\
✅ Get User By ID\
✅ Update User\
✅ Delete User\
✅ Request Validation (Joi)\
✅ Sequelize ORM\
✅ RESTful API Structure

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   Node.js
-   Express.js
-   Sequelize ORM
-   MySQL
-   Joi Validation
-   dotenv

------------------------------------------------------------------------

## 📂 Project Structure

    technical_test
    │
    ├── config/          # Database configuration
    ├── controllers/     # Business logic
    ├── models/          # Database schema
    ├── routes/          # API routes
    ├── validations/     # Joi validation schema
    ├── app.js           # Main application
    ├── .env             # Environment config
    └── package.json

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

``` bash
git clone https://github.com/ariq123/technical_test.git
cd technical_test
```

------------------------------------------------------------------------

### 2️⃣ Install Dependencies

``` bash
npm install
```

------------------------------------------------------------------------

### 3️⃣ Setup Environment

Buat file `.env`

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=technical_test
    PORT=3000

------------------------------------------------------------------------

### 4️⃣ Run Server

``` bash
npm start
```

Server akan berjalan di:

    http://localhost:3000

------------------------------------------------------------------------

# 📘 API Documentation

## 👤 User Endpoint

------------------------------------------------------------------------

### 🔹 Create User

**Endpoint**

    POST /users/add

**Request Body**

``` json
{
  "name": "Ariq",
  "email": "ariq@gmail.com",
  "role": "staff"
}
```

------------------------------------------------------------------------

### 🔹 Get All Users

**Endpoint**

    GET /users/list

**Query Parameters**

  Parameter   Description
  ----------- ----------------
  page        Nomor halaman
  limit       Jumlah data
  search      Pencarian nama

**Example**

    GET /users/list?page=1&limit=5&search=Ariq

------------------------------------------------------------------------

### 🔹 Get User By ID

    GET /users/list/:id

Example:

    GET /users/list/1

------------------------------------------------------------------------

### 🔹 Update User

    PUT /users/update/:id

**Request Body**

``` json
{
  "name": "Ariq Aqilla"
}
```

------------------------------------------------------------------------

### 🔹 Delete User

    DELETE /users/delete/:id

------------------------------------------------------------------------

## 🧪 Testing API

Gunakan:

-   Postman
-   Insomnia
-   Thunder Client (VSCode)

------------------------------------------------------------------------

## 🏗️ Architecture Flow

    Client
       ↓
    Routes
       ↓
    Controller
       ↓
    Validation (Joi)
       ↓
    Model (Sequelize)
       ↓
    Database (MySQL)

------------------------------------------------------------------------

## 💡 Design Decisions

### ✔ MVC Pattern

Memisahkan logic aplikasi agar maintainable dan scalable.

### ✔ Sequelize ORM

Mempermudah pengelolaan database dan mencegah SQL Injection.

### ✔ Joi Validation

Menjamin data request sesuai schema.

### ✔ Pagination & Search

Meningkatkan performa ketika data besar.

------------------------------------------------------------------------

## 🚀 Future Improvements

-   JWT Authentication
-   Role Based Authorization
-   Swagger Documentation
-   Unit Testing
-   Docker Support
-   Logging & Monitoring

------------------------------------------------------------------------

## 👨‍💻 Author

**Ariq Aqilla**

GitHub: https://github.com/ariq123
