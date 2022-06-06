const mysql = require('mysql2/promise');

async function getExerciseDb() {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = 'SELECT * FROM exercises';
        const [rows] = await conn.execute(sql);
        await conn.end();
        return rows;
    } catch (error) {
        return false;
    }
}

async function insertExerciseToDb(newExerciseData) {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = 'INSERT INTO exercises (name, category1, category2) VALUES (?,?,?)';
        const { name, category1, category2 } = newExerciseData;
        const [insertResult] = await conn.execute(sql, [
            name, category1, category2,
        ]);
        await conn.end();
        return insertResult;
    } catch (error) {
        res.status(500).send('Error in insertExerciseToDb');
    }
}

async function deleteSingleExerciseDb(id) {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
        const sql = 'DELETE FROM exercises WHERE id = ? LIMIT 1';
        const [deleteResult] = await conn.execute(sql, [id]);
        await conn.end();
        return deleteResult;
    } catch (error) {
        return false;
    }
}

module.exports = {
    getExerciseDb,
    insertExerciseToDb,
    deleteSingleExerciseDb,
};
