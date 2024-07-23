const mongoose  = require('mongoose');

const MenuSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    }, 

    price : {
        type : Number,
        required : true
    },


    ingredients : {
        type : String,
        required : false
    },

    is_drink : {
        type : Boolean
    }

})

const Menu  = mongoose.model('Menu', MenuSchema);
module.exports = Menu;