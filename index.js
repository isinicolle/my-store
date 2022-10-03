const express = require('express');
const  routerApi = require('./routes');

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) =>{
  res.send('Hello World!')
});

routerApi(app);

app.listen(port , () => {
  console.log('Mi port', port)
})


