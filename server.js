//1.  function add(a, b){
//     return a+b;
// }

// var res = add(4,8765);
// console.log(res);

//2.
// var add  = function(a, b){
//     return a+b;
// }

// var res = add(2, 78);
// console.log(res);


//3.
// var add = (a,b) => {return a+b};

// var res = add(23,1);
// console.log(res);


//4. 
// var add  = (a,b) => a+b;
// var res = add(89,90);
// console.log(res);



// (function(){
//     console.log("bhakti is learning backend and is ready to make brilliant  projects")
// })();


// (function(){
//     console.log("you will make all ur dreams true")
// })();

/*

steps to wwrite abv function 
1. ()

2. (function())

3. (function(){
   console.log("jregajdnfajsnf")
})

4. (function(){
   console.log("jregajdnfajsnf")
})();

*/



// function callback(){
//     console.log("wohoooo");
// }

// function add(a, b, callback){
//     var res =  a+b;
//     console.log("result " + res);
//     callback();
// }

// add(23, 678778676556557, callback);


// function callback(q,r)
// {
//     var ans  =  q+r;
//     console.log("answer " +ans);
// }

// function add(a,b,callback,q,r)
// {
//     var res = a+b;
//     console.log("result " +res);
//     callback(q,r);
// }

// add(12,5,callback,15, 9);




// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// console.log(user.uid);

// function callback(){
//     console.log("another way of doing it!");
// }
// fs.appendFile('hello.txt', "hi bhakti baby girl", callback);



// const note = require('./notes.js');

// var _ = require('lodash');

// var res = note.addNumber(12,1);

// console.log(res);

// var age = note.age;
// console.log(age);


// var data = ["p", "q", "q", "q", 'q', '2', 1,1,1,1,1,1,1,1,1,3,4];
// var filter  = _.uniq(data); /// this gives unique vals from the array 

// console.log(filter);

// console.log(_.isString("bhakti"));



// json to object
// const ans  = '{"name" : "bhakti", "age" : 21, "loc" :"bangalore"}';

// const toObj  = JSON.parse(ans);
// console.log(toObj);



// // object to json 
// const  onjGiven = 
// {
//    name : "bhakti",
//    age  : 21,
//    location : "bangalore"
// };

// const toJson = JSON.stringify(onjGiven);
// console.log(toJson);



const express = require('express')
const app = express()
const db  = require('./db'); // ./ mean the current directory
const Person = require('./models/Person');   

const Menu = require('./models/Menu');

// in the bracket, u have path to the Person model , not the name or anything like that


const bodyParser = require('body-parser');// it is a middleware , used to take out data from the body
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('welcome to my backend system project learning!')
})




app.get('/chicken', function(req, res){
   var typesOfDishes = {
       is_chutney : false,
       wantSauce  : true,
       butterChicken : "gravy",
       noodles : "dry"
   }
   //res.send("i love chickenssssss")
   res.send(typesOfDishes);
})



app.get('/idli', function(req, res){

   res.send('pls give my idli back to me!!');
})


app.post('/items', (req, res)=>{
   res.send("ur data/info has been saved. thank you!");
})
           
// GET method = info retrieve karta hai.basically user/client ko data show karta hai
// POST method = takes info/data from the client/ frontend

const PersonRoutes  = require('./routes/PersonRoutes');

app.use('/person', PersonRoutes);

const MenuRoutes = require('./routes/PersonRoutes');
app.use('/menu', MenuRoutes);

app.listen(3000, ()=>{
   console.log("the server is running")
})