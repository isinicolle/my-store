const productRoutes = require('./productRoutes');

function routes(app) {
  app.use('/api/products', productRoutes);
}

module.exports = routes;
