const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    create: function(cb) {
        orm.insertOne('burgers', burger, function(res) {
            cb(res);
        });
    },
    update: function(cb) {
        orm.updateOne('burgers', colID, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;