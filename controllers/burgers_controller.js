var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function (dbBurger) {
      var burgers = {
          burgers: dbBurger
      };
      res.render("index", burgers);
  });
});

router.post("/api/burgers", function(req, res) {
  db.burger.create(req.body).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  db.burger.update({
    devoured: true
  },{
    where: {id: req.params.id}
  })
  .then(function(dbBurger) {
    res.json(dbBurger);
  });
});

// Export routes for server.js to use.
module.exports = router;
