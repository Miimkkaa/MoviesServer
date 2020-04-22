const db = require("../models");

const Favorites = db.favorites;

const Op = db.Sequelize.Op;



// Create and Save a new Tutorial

exports.create = (req, res) => {

  // Validate request

  if (!req.body.userid) {

    res.status(400).send({

      message: "Content can not be empty!"

    });

    return;

  }



  // Create a Tutorial

  const favorites = {

    userid: req.body.userid,

    movieid: req.body.movieid,

    tvshowid: req.body.tvshowid,

  };



  // Save Tutorial in the database

  Favorites.create(favorites)

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send({

        message:

          err.message || "Some error occurred while creating the Favorites."

      });

    });

};



// Retrieve all Tutorials from the database.

exports.findAll = (req, res) => {

    const userid = req.param.userid;

    var condition = userid ? { userid: { [Op.eq]: `%${userid}%` } } : null; 

    Favorites.findAll({ where: condition })

      .then(data => {

        res.send(data);

      })

      .catch(err => {

        res.status(500).send({

          message:

            err.message || "Some error occurred while retrieving tutorials."

        });

      });

  

};


// Find a single Tutorial with an id

exports.findOne = (req, res) => {

  const id = req.params.userid;



  Favorites.findByPk(id)

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send({

        message: "Error retrieving Tutorial with id=" + id

      });

    });



};




// Update a Tutorial by the id in the request

exports.update = (req, res) => {

  const id = req.params.id;



  Favorites.update(req.body, {

    where: { id: id }

  })

    .then(num => {

      if (num == 1) {

        res.send({

          message: "Tutorial was updated successfully."

        });

      } else {

        res.send({

          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`

        });

      }

    })

    .catch(err => {

      res.status(500).send({

        message: "Error updating Tutorial with id=" + id

      });

    });



};



// Delete a Tutorial with the specified id in the request

exports.delete = (req, res) => {

  const id = req.params.id;



  Favorites.destroy({

    where: { id: id }

  })

    .then(num => {

      if (num == 1) {

        res.send({

          message: "Tutorial was deleted successfully!"

        });

      } else {

        res.send({

          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`

        });

      }

    })

    .catch(err => {

      res.status(500).send({

        message: "Could not delete Tutorial with id=" + id

      });

    });



};



// Delete all Tutorials from the database.

exports.deleteAll = (req, res) => {

  Favorites.destroy({

      where: {},

      truncate: false

    })

      .then(nums => {

        res.send({ message: `${nums} Tutorials were deleted successfully!` });

      })

      .catch(err => {

        res.status(500).send({

          message:

            err.message || "Some error occurred while removing all tutorials."

        });

      });

  

};



// Find all published Tutorials

exports.findAllPublished = (req, res) => {

  Favorites.findAll({ where: { published: true } })

  .then(data => {

    res.send(data);

  })

  .catch(err => {

    res.status(500).send({

      message:

        err.message || "Some error occurred while retrieving tutorials."

    });

  });



};