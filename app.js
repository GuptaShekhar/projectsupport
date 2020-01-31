// import dependencies
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const mainRoutes = require('./server/routes/main');


// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect('mongodb://localhost/projectsupport')
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

// set up port
const port = 5035;

// set up route
app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});