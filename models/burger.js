const orm = require("../config/orm");

const burger = {
    all(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create(burgerName, cb) {
        orm.insertOne("burgers", burgerName, function (res) {
            cb(res);
        });
    },
    update(colID, cb) {
        orm.updateOne("burgers", colID, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;
