const pool = require("./connection");

const orm = {
    selectAll(table, cb) {
        let queryString = `SELECT * FROM ${table}`;
        pool.connect((err, client, done) => {
            if (err) throw err;

            client.query(queryString, function (err, result) {
                done();

                if (err) console.error(err.stack);

                cb(result.rows);
            });
        });
    },
    insertOne(table, burger, cb) {
        let queryString = `INSERT INTO ${table} (burger_name,devoured) VALUES($1, $2)`;
        pool.connect((err, client, done) => {
            if (err) throw err;

            client.query(queryString, [burger, 0], function (err, result) {
                done();

                if (err) console.error(err.stack);

                cb(result.rows);
            });
        });
    },
    updateOne(table, queryID, cb) {
        let queryString = `UPDATE ${table} SET devoured = $1 WHERE id = $2`;
        pool.connect((err, client, done) => {
            if (err) throw err;

            client.query(queryString, [1, queryID], function (err, result) {
                done();

                if (err) console.error(err.stack);

                cb(result.rows);
            });
        });
    },
};

module.exports = orm;
