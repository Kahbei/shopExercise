const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const database = process.env.DATABASEURL || "mongodb://localhost/angular-shop";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connexion à la BDD
mongoose.Promise = global.Promise;
mongoose.connect(database,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MONGODB est connecté !!'))
    .catch(err => console.log(err));

// Route pour le CRUD des fromages
const cheeseRoute = require('./server/routes/cheeseRoute');
app.use('/api/cheese', cheeseRoute);

// Hydrate la base de données avec des éléments prédéfinis
const hydrateDB = require('./server/routes/hydrateDB');
app.use('/api/hydrate', hydrateDB);

// Pour que Express utilise Angular
app.use(express.static(`${__dirname}/dist/shopExercise`));

app.listen(port, () => console.log(`Listening server localhost:${port}`));