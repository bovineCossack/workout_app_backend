const mysql = require('mysql2/promise');

async function getCategoryDb() {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = 'SELECT * FROM muscle_groups';
        const [rows] = await conn.execute(sql);
        await conn.end();
        return rows;
    } catch (error) {
        console.log('getCategoryDb ===', error);
        return false;
    }
}

module.exports = { getCategoryDb };
