const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
})

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
