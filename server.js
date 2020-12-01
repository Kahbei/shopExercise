const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//const database = process.env.DATABASEURL || "mongodb://localhost/angular-shop";

mongoose.Promise = global.Promise;
mongoose.connect(database,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MONGODB est connecté !!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const cheeseRoute = require('./server/models/cheeseModel');
//app.use('/', cheeseRoute);

// const hydrateDB = require('./server/routes/hydrateDB');
// app.use('/', hydrateDB);

app.use(express.static(`${__dirname}/dist/shopExercise`));

app.listen(port, () => console.log(`Listening server localhost:${port}`));