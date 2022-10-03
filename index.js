const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hello World!')
});


app.get('/users', (req, res) => {
  res.json([
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'John Smith'},
    {id: 4, name: 'Jane Smith'}
  ]);
});

app.get('/users/:Userid', (req, res) => {
  const {Userid} = req.params.Userid;
  res.json({id: Userid, name: 'John Doe'});
});

app.get('/users/:Userid/member/:memberId', (req, res) => {
      const {Userid, memberId} = req.params;
      res.json({
        Userid: Userid,
        memberId: memberId
      });


});

app.listen(port , () => {
  console.log('Mi port', port)
})


