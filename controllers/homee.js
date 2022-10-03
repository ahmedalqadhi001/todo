var postUser = function (req,res,next){
    res.send('post page')
}
var getUser = function (req,res,next){
    res.send('get page')
}
var deleteUser = function (req,res,next){
    res.send('delete page')
}
var putUser = function (req,res,next){
    res.send('put page')
}

module.exports={
    postUser,
    getUser,
    deleteUser,
    putUser
}