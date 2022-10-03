var connection = require('../db');

const index = function (req, res, next) {
    connection.query('SELECT * FROM app.payments', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
}

const show = function(req, res, next) {
    connection.query(`SELECT * FROM app.payments WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send('Try again later')
        }
    })
}


const addPayment = function (req, res, next) {
  
    connection.query(`INSERT INTO app.payments ( member_id, trip_id) VALUES ('${req.body.member_id}', '${req.body.trip_id}');`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}

const update = function (req, res, next) {
    connection.query(`UPDATE app.payments SET member_id='${req.body.member_id}', trip_id='${req.body.trip_id}' WHERE id=${req.params.id};`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}

const destroy = function(req, res, next) {
    connection.query(`DELETE FROM app.payments WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}



module.exports = {
    index,
    addPayment,
    destroy,
    update,
    show

}