const router = require('express').Router();

router.get('/', (req, res) => {	// req = request, res = response
    res.json({
        status: 'success',
        message: 'Hello World!'
    });
});

const carController = require('../controllers/carController');

router.route('/cars')
    .get(carController.index)
    .post(carController.new);

router.route('/cars/:car_id')
    .get(carController.view)
    .put(carController.update)
    .delete(carController.delete);

module.exports = router;