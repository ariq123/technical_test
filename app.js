const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const morgan = require('morgan');
const compression = require('compression');
const userRoutes = require('./routes/userRoutes'); 
require('dotenv').config();
const app = express();

// Middleware
app.use(compression())
app.use(cors());
app.use(morgan('dev')); 
app.use(express.json());

(async () => {
    try {
        await db.authenticate();
        console.log('Database Connected...');
        await db.sync(); 
    } catch (error) {
        console.error('Connection error:', error);
    }
})();

app.use('/users', userRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        status: 'error',
        message: `Endpoint ${req.originalUrl} tidak ditemukan di server ini & Cek Methods Di Postman Anda`
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan internal pada server'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));