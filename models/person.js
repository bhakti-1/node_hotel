//const { uniq } = require('lodash');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

    name:{
        type: String,
        required : true
    }, 

    age:{
        type : Number
    },

    work : {
        type : String,
        enum : ['chef', 'worker','owner'],
        required: true
    },
    
    email : {
        type : String,
        required : true,
        unique  : true
       
    }

})


// creating a model 

const Person = mongoose.model('Person', personSchema);
module.exports = Person;


