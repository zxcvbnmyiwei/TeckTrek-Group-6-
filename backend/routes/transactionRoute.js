// const router = require('express');
// let Transaction = require('../models/Schema');

const router = require('express').Router();
let Transaction = require('../models/transaction.model');

router.route('/').get((req,res) => {
    Transaction.find()
        .then(transactions => res.json(transactions))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res) => {
    Transaction.findById(req.params.id)
        .then(transactions => res.json(transactions))
        .catch(err => res.status(400).json('Error: ' + err));
})