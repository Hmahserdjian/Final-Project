const db = require("../models");

// Defining methods for the researchController
module.exports = {
  create: function(req, res) {
    const researcher = {
      _id: req.body._id,
      title: req.body.cardTitle.main,
    };
    db.researcher
      .create(researcher)
      .then(researcher => res.json(researcher))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.research
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbresearcher => res.json(researcher))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.researcher
      .findById({ _id: req.params.id })
      .then(dbresearcher => dbresearcher.remove())
      .then(dbresearcher => res.json(dbresearcher))
      .catch(err => res.status(422).json(err));
  }
};
