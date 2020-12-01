const router = require('express').Router();
const Cheese = require('../models/cheeseModel');
const data = require('../models/cheeseTemplate');

router.post('/', async (req, res, next) => {
    await data.forEach( async e => {
        try{
            let nEw = new Cheese(e);
            nEw = await nEw.save();
            res.send({message: "New cheese", nEw});
        } catch (error) {
            next(error);
        }
    });
});

module.exports = router;