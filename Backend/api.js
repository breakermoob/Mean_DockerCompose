//api.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: '3306',
    password: "root",
    database: "microservices",
    charset  : 'utf8'
});
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
// initial connection
con.connect(function(err) {
    if(err) console.log(err);
});
// our simple get /jobs API
router.get('/heroes', cors(corsOptions), (req, res) => {
    con.query("SELECT * FROM heroes", function (err, result, fields) {
        if (err) res.send(err);
        res.send(result);
        console.log(result);
    });
});

module.exports = router;
