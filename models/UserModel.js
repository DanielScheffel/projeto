const mysql = require('../conexao/connection');
const { addEventListener } = mysql;

const User = mysql.addListener(
    'User',
    new addEventListener({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }, 
    })
);

module.exports = User;