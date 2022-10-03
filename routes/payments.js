var express = require('express');
var router = express.Router();
var { index, addPayment, destroy, update, show } = require('../controllers/paymentsController')

router.get('/', index),
    router.get('/:id', show),
    router.post('/', addPayment),
    router.put('/:id', update),
    router.delete('/:id', destroy),


    module.exports = router;
