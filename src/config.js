require('dotenv').config();

const mysqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
};
const serverPort = process.env.PORT || 8080;

const jwtSecret = process.env.JWT_SECRET;

module.exports = {
    mysqlConfig,
    serverPort,
    jwtSecret,
};
