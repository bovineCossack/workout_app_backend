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


module.exports = {
    getExerciseDb,
};
