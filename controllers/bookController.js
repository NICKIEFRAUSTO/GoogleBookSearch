const db = require("../models/savedModel");
console.log (db.Book)
module.exports = {

create: function(req, res) {
  
    db
    .create({

      title: req.body.volumeInfo.title,
      authors:[
        req.body.volumeInfo.authors,
      ],
      description: req.body.volumeInfo.description,
      link: req.body.volumeInfo.infoLink,
      image: req.body.volumeInfo.imageLinks.thumbnail,
    })
    // .create(req.body)
    .then(dbModel => 
      {console.log(dbModel)
        console.log(req.body)
        res.json(dbModel)
      
      })
   .catch(err => 
    {console.log(err)
      
      res.status(422).json(err)})
},
findAll: function(req, res) {
    db
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
 },
remove: function(req, res) {
    db
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};