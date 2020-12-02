const router = require('express').Router();
const Cheese = require('../models/cheeseModel');
const data = require('../models/cheeseTemplate');

// Dans un premier temps va supprimer tout les éléments de la base de données
// Puis va ajouter les valeurs contenues dans data
router.post('/', async (req, res, next) => {
    await Cheese.deleteMany();
    data.forEach( async e => {
        try{
            let nEw = new Cheese(e);
            nEw = await nEw.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    });
});

module.exports = router;