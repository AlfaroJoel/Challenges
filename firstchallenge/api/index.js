const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = 3050;

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'firstchallenge'
});

connection.connect(error => {
    if(error){
        console.log(error);
    }
    console.log('Database server running OK');
});

app.listen(PORT, () => console.log(`Server Running Port: ${PORT}`));

app.get('/', (req, res)=>{
    connection.query('SELECT * from history', (err, results, fields) => {
        if(err) throw err;
        res.send(results);
    });
});

app.delete('/delete/:id',(req, res) =>{
    let id = req.params.id;

    connection.query(`SELECT * FROM history WHERE ID = ${id}`, (err, results, fields) => {
        if(err) throw err;
        res.send(results);
    });

} )