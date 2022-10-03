const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/products', (req, res) => {
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

router.post('/products', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Product created',
    data: body
  });
});


module.exports = router;
