Car = require('../models/carModel');

exports.index = (req, res) => {
    Car.get((err, cars) => {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            data: cars,
            message: 'Cars retrieved successfully'
        });
    });
}

exports.new = function (req, res) {
    var car = new Car();

    // name// year// color// type// seat// license_number// image// price
    car.name = req.body.name;
    car.year = req.body.year;
    car.color = req.body.color;
    car.type = req.body.type;
    car.seat = req.body.seat;
    car.license_number = req.body.license_number;
    car.image = req.body.image;
    car.price = req.body.price;

    try {
        car.save((err) => {
            if (err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message
                });
            }
            res.json({
                status: "success",
                message: "Car created successfully",
                data: car
            });
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
}

exports.view = (req, res) => {
    Car.findById(req.params.car_id, (err, car) => {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Car retrieved successfully",
            data: car
        });
    });
}

exports.update = (req, res) => {
    Car.findById(req.params.car_id, (err, car) => {
        if (err) {
            return res.status(400).json({
                status: 'error',
                message: err.message
            });
        }

        car.name = req.body.name;
        car.year = req.body.year;
        car.color = req.body.color;
        car.type = req.body.type;
        car.seat = req.body.seat;
        car.license_number = req.body.license_number;
        car.image = req.body.image;
        car.price = req.body.price;
        car.save((err) => {
            if (err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message
                });
            }
            res.json({
                status: "success",
                message: "Car updated successfully",
                data: car
            });
        });
    });
}

exports.delete = (req, res) => {
    Car.deleteOne({
        _id: req.params.car_id
    }, (err, car) => {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Car deleted successfully",
            data: car
        });
    });
}