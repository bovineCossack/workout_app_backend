const mysql = require('mysql2/promise');

const mysqlConfig = require('../config');

async function insertUser(email, pass) {
    try {
        const conn = await mysql.createConnection(mysqlConfig);
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
        const conn = await mysql.createConnection(mysqlConfig);
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
