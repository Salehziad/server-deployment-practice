'use strict';
const express = require('express');
const stamper = require('../middlewar/stamper')
const id = require('../middlewar/id')
const app = express()



app.get('/', (req, res) => {
    res.status(200).send('hello')
})
app.get('/data', id, (req, res) => {
    res.json({
        id: req.id,
        name: "saleh ziad",
        email: "salehziad1999@gmail.com"
    })
})

app.get('/test', id, stamper, (req, res) => {
    res.json({
        id: req.id,
        name: "test 2 name",
        email: "test2000@gmail.com",
        time: req.timeStamp
    })
})




function start(PORT) {
    app.listen(PORT, () => {
        console.log(`server is lestining on port:${PORT}`);
    })
}


module.exports = {
    app: app,
    start: start
}