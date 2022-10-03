var express = require('express');
var router = express.Router();
var {postUser, getUser, deleteUser, putUser}= require ('../controllers/homee')

router.post ('/',postUser)
router.get('/g',getUser)
router.delete('/',deleteUser)
router.put('/',putUser)

module.exports=router