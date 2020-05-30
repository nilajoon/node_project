const express = require('express');
const router = express.Router();
const companiService = require('./compani.service');
const config = require('config.json');
const db = require('_helpers/db');


// routes

router.post('/add_compani', add_compani);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;



function add_compani(req, res, next) {
    companiService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function getAll(req, res, next) {
    companiService.getAll()
        .then(companies => res.json(companies))
        .catch(err => next(err));
}

function update(req, res, next) {
    companiService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function _delete(req, res, next) {
    companiService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}





