const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hello World!')
});


app.get('/users', (req, res) => {
  res.json([
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'}
  ]);
});

app.get('/users/:id', (req, res) => {
  res.json({id: 1, name: 'John Doe'});
});

app.listen(port , () => {
  console.log('Mi port', port)
})


