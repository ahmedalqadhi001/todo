var connection = require('../db')

const index = function (req, res, next) {
    connection.query('SELECT * FROM app.trips', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send('Try again later')
        }
    })
}

const show = function (req, res, next) {
    connection.query(`SELECT * FROM app.trips WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send('Try again later')
        }
    })
}
const store = function (req, res, next) {
    connection.query(`INSERT INTO app.trips (title, date, cost) VALUES ('${req.body.title}', '${req.body.date}', '${req.body.cost}');`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}

const destroy = function (req, res, next) {
    connection.query(`DELETE FROM app.trips WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (!err) {
            res.send('Done')
        } else {
            res.send('Error')
        }
    })
}
const update = function (req, res, next) {
    connection.query(`UPDATE app.trips SET title='${req.body.title}', date=${req.body.date}, cost='${req.body.cost}' WHERE id=${req.params.id};`, (err, rows, fields) => {
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