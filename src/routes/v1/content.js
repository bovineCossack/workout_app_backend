const express = require('express');
const mysql = require('mysql2/promise');
const { mysqlConfig } = require('../../config');

const router = express.Router();

router.get('/exercises', async (req, res) => {
    try {
        const conn = await mysql.createConnection(mysqlConfig);
        const [data] = await conn.execute('SELECT * FROM exercises');
        await conn.end();

        return res.send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: 'Server issue - please try again' });
    }
});

