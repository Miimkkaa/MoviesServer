const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;


// Create and Save a new Movie
exports.create = (req, res) => {

  // Validate request
  if (!req.body.Title) {

    res.status(400).send({

      message: "Content can not be empty!"

    });

    return;

  }
  // Create a Movie
  const movie = {
    Title: req.body.Title,
    Description: req.body.Description,
    URL: req.body.Url,
    Genre: req.body.Genre,
    Picture: req.body.Picture,

  };

  // Save Movie in the database
  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Movie."
      });
    });
};



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Movie.findAll({ where: condition })

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

    const id = req.params.id;



    Movie.findByPk(id)

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

    Movie.update(req.body, {
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

    Movie.destroy({

      where: {id: id}
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
    Movie.destroy({
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
