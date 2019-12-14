const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, burger, cb) {
        let queryString = 'INSERT INTO ??(burger_name,devoured) VALUES(?,?)';
        connection.query(queryString,[table, burger, 0], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, queryID, cb) {
        let queryString = 'UPDATE ?? SET devoured = ? WHERE id = ?';
        connection.query(queryString, [table, 1, queryID], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;