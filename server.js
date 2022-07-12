const express = require('express');
const apiRouter = require('./routes/api-routes');	// api-routes.js
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const uri = "mongodb+srv://adimas:adimas@cluster0.doyjyta.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to the Database!');
});
connection.on('error', (err) => {
    console.log(err);
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});