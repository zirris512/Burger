const pg = require("pg");

const pool = new pg.Pool({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burger",
});

module.exports = pool;
