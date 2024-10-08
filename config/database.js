// import mysql
const mysql = require('mysql');

// import .env dan jalankan method config
require('dotenv').config();

// destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// buat koneksi
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

// connect ke database
db.connect((err) => {
    if (err) {
        console.log("Error connecting" + err.stack);
        return;
    } else {
        console.log("Database connected!");
        return;
    }
});

// export db
module.exports = db;