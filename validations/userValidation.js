const Joi = require('joi');

// Validasi saat CREATE User
const createUserSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.empty': 'Nama tidak boleh kosong',
        'string.min': 'Nama harus minimal 3 karakter'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Format email tidak valid',
        'any.required': 'Email wajib diisi'
    }),
    role: Joi.string().optional()
});

// Validasi saat UPDATE User 
const updateUserSchema = Joi.object({
    name: Joi.string().min(3).optional(),
    email: Joi.string().email().optional(),
    role: Joi.string().optional()
});

module.exports = {
    createUserSchema,
    updateUserSchema
};