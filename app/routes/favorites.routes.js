module.exports = app => {

    const favorites = require("../controllers/favorites.controller.js");
  
  
  
    var router = require("express").Router();
  
  
  
    // Create a new Tutorial
  
    router.post("/", favorites.create);
  
  
  
    // Retrieve all favorites
  
    router.get("/", favorites.findAll);

    
   
  
  
    app.use('/api/favorites', router);
  
  };