require('dotenv').config({ path: '.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

// extract constants from process.env
const { PORT } = process.env;

// express application
const app = express();

// middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// add routes
routes(app);

// start the web server
const port = PORT || 6000;
const server = app.listen(PORT, () => {
  console.log('Server listening on:', port);
});

module.exports = {
  server
};
