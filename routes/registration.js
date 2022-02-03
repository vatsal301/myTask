var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var query = require("../models/registration");
mongoose.connect("mongodb://localhost/mytask");

router.get("/", function (req, res, next) {
  res.render("registration", { title: "Express" });
});

router.post("/", (req, res, next) => {
  console.log("data ", req.body);
  let data = new query(req.body);
  data
    .save()
    .then((result) => {
      console.log("data save", result);
      if (result != "" || result != null || result != undefined) {
        res.redirect("/");
      } else {
        res.redirect("/registration");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
