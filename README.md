* Dokumentasi API *
Gunakan Postman untuk melakukan testing ke endpoint berikut:

1. Tambah User (Create)
URL: POST /users/add

Body (JSON):

{
  "name": "test", (wajib di isi)
  "email": "test@gmail.com", (wajib di isi)
  "role": "staff" (wajib di isi)
}

2. Lihat Semua User (Read)
Mendukung Pagination & Searching.

URL: GET /users/list (Untuk Mendapatkan Semua Data User)
URL: GET /users/list/:id (Untuk Mendapatkan User Bedasarkan ID)

Contoh: /users/list?page=1&limit=5&search=Ariq (Mencari User Menggunakan fitur pencarian dengan pagination)

3. Update Data User
URL: PUT /users/update/:id

Body: (JSON) (Kirim field yang ingin diubah saja)

4. Hapus User (Delete)
URL: DELETE /users/delete/:id

🧪 Struktur Project
Project ini menggunakan arsitektur MVC (Model-View-Controller) untuk code quality yang lebih baik:

config/: Konfigurasi Database Sequelize.

controllers/: Logic utama (CRUD & Re-sequencing).

models/: Schema database.

routes/: Routing endpoint API.

validations/: Skema validasi input menggunakan Joi.

👨‍💻 Author
Dibuat oleh Ariq Aqilla