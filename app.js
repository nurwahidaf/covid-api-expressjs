// import express dan router
const express = require('express');
const router = require('./routes/api');

// import .env dan jalankan method config
require('dotenv').config();

// destructing object process.env
const { APP_PORT } = process.env;

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// menggunakan router
app.use(router);

// definisikan port dan jalankan server
app.listen(APP_PORT, () => {
    console.log(`Server is running at http://localhost:${APP_PORT}`);
}); 