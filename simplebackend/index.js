const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;
const dataFile = '/data/users.json';

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
    const user = req.body;
    let users = [];
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile, 'utf8');
        users = JSON.parse(data);
    }
    users.push(user);
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
    res.status(201).send(user);
});

app.get('/users', (req, res) => {
    let users = [];
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile, 'utf8');
        users = JSON.parse(data);
    }
    res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});