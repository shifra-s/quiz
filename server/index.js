const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8888;
const app = express();
const jwt=require('jsonwebtoken');
const JWT_KEY = 'hr983y498r3hf304dfg'
var mysql = require('mysql');
app.use(express.json());

app.use(cors());

//Middlewares
app.use(cors());
app.use(bodyParser());

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

app.use(function(req, res, next) {
    if (req.path === '/login') {
        next();
    }
    else if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } else {
        try {
            const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), JWT_KEY);
            next();
        }
        catch (ex) {
            const e = ex;
            return res.status(401).json({ error: 'Bad credentials' });
        }
        
    }
    
  });

app.post('/login', function (req,res) {
    const postData = req.body;
    console.log(postData);

    if (postData.username === 'shifra' && postData.password === '1234') {
        const token = jwt.sign({username:'shifra'}, JWT_KEY);
        res.json(token)
    } else {
        res.status(403).json('go away');
    }
})

//const http = require('http').Server(app);

//endpoints

app.get('/quiz', function (req, res) {
    let sql = "SELECT * FROM quiz"
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    })
});


app.post('/quiz', function (req, res) {
    const postData = req.body;
    console.log(postData);

    res.json('got a response');

});

app.listen(PORT, function () {
    console.log('server started at port' + PORT)
})




