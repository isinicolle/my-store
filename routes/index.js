const productRoutes = require('./productRoutes');

function routes(app) {
  //ruta maestra
const router = express.Router();
  //ruta hija
  app.use('/api/v1', router);

  app.use('/api/products', productRoutes);
}

module.exports = routes;
