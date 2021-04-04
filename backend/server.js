require('dotenv').config({ path: './app/config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
// middlewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// connection
require('./app/config/database/connection');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at on port ${PORT}`);
});
