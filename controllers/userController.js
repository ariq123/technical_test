const db = require('../config/database');
const User = require('../models/User');
const {
    createUserSchema,
    updateUserSchema
} = require('../validations/userValidation');

// Helper function 
const sendResponse = (res, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        status: statusCode >= 400 ? 'error' : 'success',
        message: message,
        data: data
    });
};


const { Op } = require('sequelize'); 

exports.getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const offset = (page - 1) * limit;

        // Query dengan Filter & Pagination
        const { count, rows } = await User.findAndCountAll({
            attributes: ['id', 'name', 'email', 'role'],
            where: {
                name: {
                    [Op.like]: `%${search}%` 
                }
            },
            offset: offset,
            limit: limit,
            order: [['id', 'DESC']]
        });

        res.status(200).json({
            status: 'success',
            message: 'Data berhasil diambil',
            pagination: {
                total_data: count,
                total_page: Math.ceil(count / limit),
                current_page: page,
                limit: limit
            },
            data: rows
        });

    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return sendResponse(res, 404, "User tidak ditemukan");
        sendResponse(res, 200, "Detail user ditemukan", user);
    } catch (error) {
        sendResponse(res, 500, "Internal Server Error: " + error.message);
    }
};

exports.createUser = async (req, res) => {
    try {
        const {
            error
        } = createUserSchema.validate(req.body);
        if (error) return sendResponse(res, 400, error.details[0].message);

        const newUser = await User.create(req.body);
        sendResponse(res, 201, "User berhasil ditambahkan", newUser);

    } catch (error) {

        if (error.name === 'SequelizeUniqueConstraintError') {
            return sendResponse(res, 409, "Email sudah terdaftar, gunakan email lain.");
        }
        if (error.name === 'SequelizeValidationError') {
            return sendResponse(res, 400, error.errors.map(e => e.message).join(', '));
        }
        console.error("Error Create User:", error);
        sendResponse(res, 500, "Gagal menambahkan user.");
    }
};

exports.updateUser = async (req, res) => {
    try {
        const {
            error
        } = updateUserSchema.validate(req.body);
        if (error) return sendResponse(res, 400, error.details[0].message);

        const user = await User.findByPk(req.params.id);
        if (!user) return sendResponse(res, 404, "User tidak ditemukan, gagal update.");
        await user.update(req.body);
        sendResponse(res, 200, "User berhasil diupdate", user);

    } catch (error) {

        if (error.name === 'SequelizeUniqueConstraintError') {
            return sendResponse(res, 409, "Email sudah digunakan user lain.");
        }
        sendResponse(res, 500, "Gagal mengupdate user.");
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: "User tidak ditemukan"
            });
        }
        await user.destroy();
        await db.query('ALTER TABLE users AUTO_INCREMENT = 1');
        res.status(200).json({
            status: 'success',
            message: "User berhasil dihapus dan urutan ID telah direset"
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: "Gagal menghapus user: " + error.message
        });
    }
};