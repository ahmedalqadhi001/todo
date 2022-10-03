var connection = require('../db')

const index = function (req, res, next) {
    connection.query('SELECT * FROM app.members', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send('Try again later')
        }
    })
}

const show = function(req, res, next) {
    connection.query(`SELECT * FROM app.members WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send('Try again later')
        }
    })
}
const store = function (req, res, next) {
    connection.query(`INSERT INTO app.members (name, phone, city, age, gander) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.city}', '${req.body.age}', '${req.body.gander}');`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}

const destroy = function(req, res, next) {
    connection.query(`DELETE FROM app.members WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}
const update = function (req, res, next) {
    connection.query(`UPDATE app.members SET name='${req.body.name}', age=${req.body.age}, phone='${req.body.phone}', city='${req.body.city}' WHERE id=${req.params.id};`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}
module.exports = {
    index,
    show,
    store,
    destroy,
    update
}