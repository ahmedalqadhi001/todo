var express = require('express');
var router = express.Router();
var { index, show, store, destroy, update } = require('../controllers/tripController')

router.get('/', index),
    router.get('/:id', show),
    router.post('/', store),
    router.delete('/:id', destroy),
router.put('/:id', update),


    module.exports = router;