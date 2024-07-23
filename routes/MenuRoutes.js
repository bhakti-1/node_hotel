const express  = require('express');
const routerMenu = express.Router();

const Menu = require('.././models/Menu');

routerMenu.get('/' ,async(req, res) =>{
    try
    {
       const result = await Menu.find();
       console.log("data has been fetched");
       res.status(200).json(result);
    }
    catch(err)
    {
     console.log("there is an error in the output data");
     res.status(500).json({error: " there is an internal service error"});
    }
 })

   require(.././n)
 
 routerMenu.post('/', async(req, res) =>{

    try{
       const data  = req.body
       const newMenu  = new Menu(data);
       const ans = await newMenu.save();
       console.log("data has been saved ");
       res.status(200).json(ans);
    }
 
    catch(err)
    {
     console.log("the data has an error");
     res.status(500).json({error : 'there is an error'});
    }
 })


 module.exports = routerMenu;
