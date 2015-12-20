'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('../controllers/errors.server.controller'),
    Formdata = mongoose.model('FormData');
exports.index = function (req, res) {
    res.render('index', {
        user: req.user || null,
        request: req
    });
};

exports.createuser = function (req, res) {
    var customer = new Formdata(req.body);
    Formdata.find({
        'pancard': customer.pancard
    }).exec(function (err, user) {
        console.dir(user);
        console.log(user === []);
        if (err) {
            console.error('Error fetching customer details' + err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else if (!user.length) {
            customer.save(function (err, response) {
                if (err) {
                    console.error('Error in creating license' + err);
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                } else if (response) {
                    console.log('user registration successful');
                    response.message = 'user registration successful';
                    res.jsonp(response);
                }
            });
        } else if (user.length) {
            var response = {};
            response.message = 'User exists !!!';
            console.error(response.message);
            res.jsonp(response);
        }

    });
};