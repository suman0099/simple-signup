const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/user");
const Application = require("../models/application");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/application", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/application.html"));
});

router.post("/", (req, res) => {
  const user = req.body.user;
  //console.log(user);
  User.create(user)
    .then(saved => console.log(saved))
    .catch(err => console.error(err));

  res.redirect("/application");
});

router.post("/login", (req, res) => {
  const findUser = req.body.user;
  User.find({ username: findUser.username, password: findUser.password }).then(
    user => {
      console.log(user);
      if (user.length != 0) {
        res.redirect("/application");
      } else res.redirect("/login");
    }
  );
});

router.post("/application", (req, res) => {
  const form = req.body.form;
  console.log(form);
  Application.create(form)
    .then(saved => {
      console.log(saved);
      res.send(saved);
    })
    .catch(err => console.error(err));
});

module.exports = router;
