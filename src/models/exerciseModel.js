const mysql = require('mysql2/promise');
const mysqlConfig = require('../config');

async function getExerciseDb() {
    try {
        const conn = await mysql.createConnection(mysqlConfig);
        const sql = 'SELECT * FROM exercises';
        const [rows] = await conn.execute(sql);
        await conn.end();
        return rows;
    } catch (error) {
        console.log('getExerciseDb ===', error);
        return false;
    }
}

async function insertExerciseToDb(newExerciseData) {
    try {
        const conn = await mysql.createConnection(mysqlConfig);
        const sql = 'INSERT INTO exercises (name, category1, category2) VALUES (?,?,?)';
        const { name, category1, category2 } = newExerciseData;
        const [insertResult] = await conn.execute(sql, [
            name, category1, category2,
        ]);
        await conn.end();
        return insertResult;
    } catch (error) {
        console.log('Error inserting data', error);
        res.status(500).send('Error in insertExerciseToDb');
    }
}

module.exports = {
    getExerciseDb,
    insertExerciseToDb,
};
