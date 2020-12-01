const router = require('express').Router();
const Cheese = require('../models/cheeseModel');
const cors = require('cors');

router.get('/',cors(), async (req, res, next) => {
    try {
        let cheeses = await Cheese.find();
        res.send(cheeses);
    } catch (error) {
        next(error);
    }
});

// router.post('/new_cheese', async (req, res, next) => {
//     try {
//         let newCheese = new Cheese(req.body);
//         newCheese = await newCheese.save();
//         res.send({message: "New cheese", newCheese});
//     } catch (error) {
//         next(error);
//     }
// });

// router.route('/:cheese_id')
//         .get(async (req, res, next) => {
//             try {
//                 let cheese = await Cheese.findOne({ _id: req.params.cheese_id});
//                 res.send(cheese);
//             } catch (error) {
//                 next(error);
//             }
//         })
//         .put(async (req, res, next) => {
//             try {
//                 let updatedCheese = await Cheese.updateOne({ _id: req.params.cheese_id }, { $set : req.body });
//                 res.send(updatedCheese);
//             } catch (error) {
//                 next(error)
//             }
//         })
//         .delete(async (req, res, next) => {
//             try {
//                 let deletedCheese = await Cheese.deleteOne({ _id: req.params.cheese_id });
//                 res.send(deletedCheese);
//             } catch (error) {
//                 next(error)
//             }
//         })

module.exports = router;