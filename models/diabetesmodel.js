const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    Numberofpregnancies: {
        type:String
    },
    glucoselevel:{
        type:String
    },
    bplevel: {
        type:String
    },
    skinthickness: {
        type:String
    },
    insulinlevel: {
        type:String
    },
    bmilevel: {
        type:String
    },
    diabetesvalue: {
        type:String
    },
    age: {
        type:String
    }
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

module.exports = FormDataModel;
