'use strict';
const express = require('express');
const stamper = require('../middlewar/stamper')
const id = require('../middlewar/id')
const handleNotFound = require('../handlers/404')
const handleServerError = require('../handlers/500')
const app = express()

// ROUTES *******************/

app.get('/', (req, res) => {
    res.status(200).send('hello')
})
app.get('/data', stamper, id, (req, res) => {
    res.json({
        id: req.id,
        name: "saleh ziad",
        email: "salehziad1999@gmail.com",
        time: req.timeStamp
    })
})
app.get('/error500', (req, res) => {
    let number = 1;
    let output = number.forEach((e) => {
        console.log(e);
    });
    res.status(500).send(result);
})
app.use('*', handleNotFound);
app.use(handleServerError);

// FUNCTIONS ***************************************************************/

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`server is lestining on port:${PORT}`);
    })
}

// EXPORTS

module.exports = {
    app: app,
    start: start
}