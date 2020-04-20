module.exports = app => {
    const tvshows = require("../controllers/tvshows.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tvshows.create);

    // Retrieve all Tutorials
    // app.route('/tvshows')
    // .get(tvshows.findAll);

    router.get("/all", tvshows.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tvshows.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tvshows.findOne);

    // Update a Tutorial with id
    router.put("/:id", tvshows.update);

    // Delete a Tutorial with id
    router.delete("/:id", tvshows.delete);

    // Create a new Tutorial
    router.delete("/", tvshows.deleteAll);

    //base url
    app.use('/api/tvshows', router);
};
