'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * FormData Schema
 */
var FormDataSchema = new Schema({
    // FormData model fields
    // ...
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    profession: {
        type: String,
        trim: true
    },
    mobile:{
      type: Number,
      trim: true
    },
    pancard: {
        type: String,
        trim: true
    },
    grossannualincome: {
        type: Number,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    designation: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    pincode:{
      type: Number,
      trim: true
    },
    accounttype: {
        type: String,
        trim: true
    },
    fixeddeposit: {
        type: Boolean,
        trim: true
    },
    creditcard: {
        type: Boolean,
        trim: true
    },
    terms: {
        type: Boolean,
        trim: true
    }
}, {
    versionKey: false
});

mongoose.model('FormData', FormDataSchema);