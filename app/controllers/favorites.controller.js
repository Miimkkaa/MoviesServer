const db = require("../models");

const Favorites = db.Favorites;

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

    // [Op.eq]: '%' + (userid) + '%'
  
  

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



