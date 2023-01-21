const pg = require("pg");

const connectionString = process.env.CONNECT;

const pool = new pg.Pool(
    connectionString
        ? {
              connectionString,
          }
        : {}
);

module.exports = pool;
