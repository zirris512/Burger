const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    create: function(burgerName, cb) {
        orm.insertOne('burgers', burgerName, function(res) {
            cb(res);
        });
    },
    update: function(colID, cb) {
        orm.updateOne('burgers', colID, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;