const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');   


router.get('/', async (req, res) =>{
    try
    {
  // this GET method gets all the data stored in our database to the client .Peron.find() is the name of the model that gets us all the data stored in our database 
       const data = await Person.find();
       console.log("data fetched from the database we made for our application");
       res.status(200).json(data);
    }
    catch
    {
       console.log("internal error");
       res.status(500).json({error: 'there is an error'});
    }
 })


 router.get('/:workType', async(req, res)=>{
    try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager'){
       const response  = await Person.find({work : workType});
       console.log('response fetched');
       res.status(200).json(response);
     }
     else{
       res.status(404).json({error : 'invalid work type'});
     }
    }
  
    catch(err)
     {
       console.log("there is an error in the output data");
       res.status(500).json({error: " there is an internal service error"});
    }
 })



 router.post('/', async(req, res) =>{
    try{
      const data = req.body
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }

    catch(err)
    {
      console.log(err);
      res.status(500).json({error : 'internal server error'});
    }
  })


  router.delete('/:id',  async(req, res) =>{
   
   try{
      const personId   =  req.params.id;
      const response = await Person.findByIdAndDelete(personId);
if(!response){
   return res.status(404).json({error : 'Person not found'});
}

console.log('data deleted');
res.status(200).json({message : 'person deleted successfully'});
   }

   catch(err){
console.log(err);
      res.status(500).json({error : 'internal server error'});
   }
  })




  









               




  module.exports = router;
