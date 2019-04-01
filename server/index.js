const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
var mysql = require('mysql');
app.use(express.json());

app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quiz'
});

connection.connect(function (e, d) {
    if (e) console.log(e);
    console.log('con success');
})


const http = require('http').Server(app);


app.get('/quiz', function (req, res) {
    let sql = "SELECT * FROM quiz"
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    })
});

app.listen(PORT, function () {
    console.log('server started at port' + PORT)
})




