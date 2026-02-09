**📘 API Documentation – User Management Service
📌 Overview**

API ini digunakan untuk mengelola data user menggunakan arsitektur MVC (Model-View-Controller). API menyediakan fitur CRUD lengkap serta mendukung pagination dan searching.

Project menggunakan:

Node.js + Express

Sequelize ORM

Joi Validation

RESTful API pattern

Struktur project:

config/ → konfigurasi database Sequelize

controllers/ → business logic CRUD

models/ → schema database

routes/ → endpoint routing

validations/ → validasi request menggunakan Joi

(API ini memang disusun menggunakan MVC untuk meningkatkan code maintainability dan separation of concern.)

🔗 Base URL
http://localhost:3000


(Sesuaikan dengan port project kamu)

👤 User API
1️⃣ Create User

Menambahkan user baru ke database.

Endpoint
POST /users/add

Request Body
{
  "name": "Ariq",
  "email": "ariq@gmail.com",
  "role": "staff"
}

Validation Rules

name → wajib

email → wajib

role → wajib

Success Response
{
  "message": "User berhasil ditambahkan",
  "data": {
    "id": 1,
    "name": "Ariq",
    "email": "ariq@gmail.com",
    "role": "staff"
  }
}

2️⃣ Get All Users

Mengambil semua data user dengan pagination dan searching.

Endpoint
GET /users/list

Query Parameters
Parameter	Type	Description
page	number	halaman data
limit	number	jumlah data
search	string	pencarian berdasarkan nama
Contoh Request
GET /users/list?page=1&limit=5&search=Ariq


(API mendukung pagination dan search.)

Success Response
{
  "page": 1,
  "totalData": 10,
  "data": [
    {
      "id": 1,
      "name": "Ariq",
      "email": "ariq@gmail.com",
      "role": "staff"
    }
  ]
}

3️⃣ Get User By ID

Mengambil user berdasarkan ID.

Endpoint
GET /users/list/:id

Contoh
GET /users/list/1

Response
{
  "id": 1,
  "name": "Ariq",
  "email": "ariq@gmail.com",
  "role": "staff"
}

4️⃣ Update User

Mengupdate data user.

Endpoint
PUT /users/update/:id

Request Body

(Hanya kirim field yang ingin diubah)

{
  "name": "Ariq Aqilla"
}


(API menerima partial update.)

Response
{
  "message": "User berhasil diupdate"
}

5️⃣ Delete User

Menghapus data user.

Endpoint
DELETE /users/delete/:id

Contoh
DELETE /users/delete/1

Response
{
  "message": "User berhasil dihapus"
}

⚙️ Cara Menjalankan Project
1. Clone Repository
git clone https://github.com/ariq123/technical_test.git
cd technical_test

2. Install Dependencies
npm install

3. Setup Environment

Edit file .env

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
PORT=3000

4. Jalankan Server
npm start


Server akan berjalan di:

http://localhost:3000

🧪 Cara Testing Menggunakan Postman
Create User

Method → POST

URL → /users/add

Body → JSON

Get All User

Method → GET

URL → /users/list?page=1&limit=5

Update User

Method → PUT

URL → /users/update/{id}

Delete User

Method → DELETE

URL → /users/delete/{id}

(Postman digunakan untuk testing endpoint API.)

🏗️ Flow Sistem (Untuk Jelasin Saat Interview)
Client → Routes → Controller → Validation → Model → Database


Penjelasan:

Routes → menentukan endpoint

Controller → logic bisnis

Validation → validasi input

Model → komunikasi database

Sequelize → ORM database
