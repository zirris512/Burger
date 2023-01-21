const pg = require("pg");

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password: "P83tjtQ0",
    database: "burger",
});

module.exports = pool;
