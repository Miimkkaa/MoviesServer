module.exports = app => {
    const person = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", person.create);
  
    // Get all users
    router.get("/", person.findAll);
  
    // Get user by id
    router.get("/:id", person.findOne);
  
    // Update user information with id
    router.put("/:id", person.update);
  
    // Delete all users
    router.delete("/", person.deleteAll);

    // Delete a Tutorial with id
    router.delete("/:id", person.delete);

    // Login check
    router.get("/login/{username}/{password}", person.findAll);
  
    app.use('/api/person', router);
  };