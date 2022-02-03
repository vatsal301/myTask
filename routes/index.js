var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var query = require("../models/registration");
mongoose.connect("mongodb://localhost/mytask");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  console.log("body data is,", req.body);
  query
    .find({ email: req.body.email, password: req.body.password })
    .then((result) => {
      console.log("find query", result);
      if (result == [] || result == "" || result == null) {
        res.redirect("/");
      } else {
        res.redirect("/home");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
