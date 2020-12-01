const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const database = 'mongodb://angularman:123angu&@ds157233.mlab.com:57233/shop-angular?retryWrites=false';
//const database = process.env.DATABASEURL || "mongodb://localhost/angular-shop";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(database,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MONGODB est connecté !!'))
    .catch(err => console.log(err));

const cheeseRoute = require('./server/routes/cheeseRoute');
app.use('/api/cheese', cheeseRoute);

// const hydrateDB = require('./server/routes/hydrateDB');
// app.use('/', hydrateDB);

app.use(express.static(`${__dirname}/dist/shopExercise`));

app.listen(port, () => console.log(`Listening server localhost:${port}`));