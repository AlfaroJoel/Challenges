const express = require('express');
var cors = require('cors');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = 4000;

const app = express();

app.use(cors())
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
    const sql = 'SELECT * from history';

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        res.send(results);
    });
});

app.delete('/delete/:id',(req, res) =>{
    const id = req.params.id;
    const sql = `DELETE FROM history WHERE ID = ${id}`

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        res.send('Delete ok');
    });
})

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO history SET ?';

    const customObj = {
        concept: req.body.concept,
        amount: req.body.amount,
        day: req.body.day
    }

    connection.query(sql, customObj, error => {
        if(error) throw error;
        res.send('Create ok');
    })
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    let { concept, amount, day } = req.body;

    day = day.replace(/-/g, '');

    const sql = `UPDATE history SET concept = '${concept}', amount = ${amount}, day = ${day} WHERE ID = ${id}`

    connection.query(sql, error => {
        if(error) throw error;
        res.send('Update ok');
    })
})