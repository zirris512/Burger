const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all(data => {
        res.render('index', {burger: data})
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name, result => {
        console.log(result);
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.params.id, result => {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;