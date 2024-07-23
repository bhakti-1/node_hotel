const mongoose  = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL, {
    // useNewUrlParser : true,
    // useUnifiedTopology: true
})
 
const db = mongoose.connection; // db is obj used to connect nodejs and mongodb

// these are event listeners. (eg, connected, disconnected, error)

db.on('connected' , () =>{
    console.log("connected to mongodb server");
});

db.on('disconnected' , () =>{
    console.log("disconnected to mongodb server");
});
db.on('error' , () =>{
    console.log("error is there");
});


// 
module.exports = db;//db represents the mongodb connection 


