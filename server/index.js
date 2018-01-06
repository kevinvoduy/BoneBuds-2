require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./SQL/db')

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});