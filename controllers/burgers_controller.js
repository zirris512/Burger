const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (_req, res) => {
    burger.all((data) => {
        res.render("index", { burger: data });
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.burger_name, () => {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update(req.params.id, () => {
        res.sendStatus(200);
    });
});

router.get("/api/end", (req, res) => {
    burger.end();
});

module.exports = router;
