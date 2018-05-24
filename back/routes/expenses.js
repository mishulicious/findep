const router = require('express').Router();
const Post = require('../models/Expense');

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("Epape epale perro que hace aqui");
}

router.post('/new', isAuthenticated, (req, res) => {
    Expense.create(req.body)
        .then(expense => {
            res.json(expense);
        }).catch(e => {
            res.send(e);
        })
});

router.get('/', isAuthenticated, (req, res) => {
    Expense.find()
        .then(expenses => {
            res.json(expenses);
        })
        .catch(e => {
            console.log(e);
            res.send("No funco papud")
        })
});

module.exports = router;