const mysql = require('mysql2/promise');
const dbConfig = require('../config');

async function exerciseIndex() {
    let conn;
    try {
        conn = await mysql.createConnection(dbConfig);
        const sql = 'SELECT * FROM exercises';
        const [exercises] = await conn.query(sql);
        console.log('b4 return exercises');
        return exercises;
    } catch (error) {
        console.log('exerciseIndex error', error);
        return false;
    } finally {
        console.log('finally');
        await conn.close();
    }
}

module.exports = {
    exerciseIndex,

}