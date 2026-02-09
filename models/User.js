const {
    DataTypes
} = require('sequelize');
const db = require('../config/database');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'staff'
    }
}, {
    freezeTableName: true,
    timestamps: true, 
    indexes: [{
            unique: false,
            fields: ['name'] 
        },
        {
            unique: true,
            fields: ['email'] 
        }
    ]
});

module.exports = User;