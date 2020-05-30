const express = require('express');
const router = express.Router();
const  productService = require('./product.service');

// routes

router.post('/add_product', add_product);
router.put('/:id', update);
router.get('/', getAll);
router.post('/',getproductfilter);
router.delete('/:id', _delete);



module.exports = router;



function add_product(req, res, next) {
    productService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    productService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function getAll(req, res, next) {
    productService.getAll()
        .then(products => res.json(products))
        .catch(err => next(err));
}

function  getproductfilter(req, res, next) {
    res.removeHeader("X-Powered-By")
    productService.getproductfilter(req.body)
        .then(products => res.json(products))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}





