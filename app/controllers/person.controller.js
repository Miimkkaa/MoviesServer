const db = require("../models");
const Person = db.person;
const Op = db.Sequelize.Op

// Get all people from the database
exports.findAll = (req, res) => {
  const fullname = req.query.fullname;
  var condition = fullname ? { fullname: { [Op.like]: `%${fullname}%` } } : null;

  Person.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}; 

// Create and Save a new person
exports.create = (req, res) => {
  // Validate request
  if (!req.body.fullname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a new user
  const person = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };

  // Save person in the database
  Person.create(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while signing up."
      });
    });
};

// Get all by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Person.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update user information
exports.update = (req, res) => {
  const id = req.params.id;

  Person.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person information was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update person info with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete all users
exports.deleteAll = (req, res) => {
  Person.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} people were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all people."
        });
      });
};

// Delete user by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Person.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete person with id=${id}. User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete people with id=" + id
      });
    });
};

// Login validation
/*exports.findAll = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  var collection = Person.findAll();
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null && password ? { password: { [Op.like]: `%${password}%` } } : null;

  Person.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}; */