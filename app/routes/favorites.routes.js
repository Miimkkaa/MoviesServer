module.exports = app => {

    const favorites = require("../controllers/favorites.controller.js");
  
  
  
    var router = require("express").Router();
  
  
  
    // Create a new Tutorial
  
    router.post("/", favorites.create);
  
  
  
    // Retrieve all favorites
  
    router.get("/", favorites.findAll);

    
  // Retrieve all published Tutorials

  router.get("/published", favorites.findAllPublished);


  // Retrieve a single Tutorial with id

  router.get("/:id", favorites.findOne);



  // Update a Tutorial with id

  router.put("/:id", favorites.update);


  // Delete a Tutorial with id

  router.delete("/:id", favorites.delete);


  // Create a new Tutorial

  router.delete("/", favorites.deleteAll);
   
    app.use('/api/favorites', router);
  
  };