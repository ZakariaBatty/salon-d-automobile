require('dotenv').config({ path: './app/config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// require all router
const client = require('./app/routers/client.router');
const owner = require('./app/routers/owner.router');

const app = express();
// middlewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// router
app.use('/', client);
app.use('/', owner);

// connection
require('./app/config/database/connection');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at on port ${PORT}`);
});
