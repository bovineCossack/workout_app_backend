const mysql = require('mysql2/promise');

// const mysqlConfig = require('../config');

async function insertUser(email, pass) {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = `
    INSERT INTO users (email,password)
    VALUES (?,?)
    `;
        const [insertResult] = await conn.execute(sql, [email, pass]);
        await conn.end();
        return insertResult;
    } catch (error) {
        console.log('insertUser ===', error);
        return false;
    }
}
async function findUserByEmail(email) {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = `
    SELECT * FROM users
    WHERE email = ?
    `;
        const [userFoundResult] = await conn.execute(sql, [email]);
        await conn.end();
        return userFoundResult;
    } catch (error) {
        console.log('findUserByEmail ===', error);
        return false;
    }
}
module.exports = {
    insertUser,
    findUserByEmail,
};
