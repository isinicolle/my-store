const express = require('express');
const faker = require('faker');

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

app.get('/users/filtrer', (req, res) => {
  console.log('Lo especifico va primero que lo dinamico')
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

app.get('/productos', (req, res) => {
  const {limit, offset} = req.query;

  if(limit && offset){
    res.json({
      limit: limit,
      offset: offset
    });
  } else {
    res.send('No params');
  }
});

app.get('/products', (req, res) => {
const products = [];
const {size} = req.query;
const limit = size || 10;
for(let i = 0; i < limit; i++){
  products.push({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.imageUrl()
  });
}
res.json(products);


});



app.listen(port , () => {
  console.log('Mi port', port)
})


