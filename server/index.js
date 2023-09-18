const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = 'asde22df24ygb457hb52rfdhg';
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);
const bcryptSalt = bcrypt.genSaltSync(10);
mongoose.connect(
  'mongodb+srv://prime:prime123@cluster0.0btyr7u.mongodb.net/?retryWrites=true&w=majority'
);
app.get('/', async (req, res) => {
  res.json('Hello world');
});
app.listen(4000);
