
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");
const { response } = require("express");
require("dotenv").config();
const User = require('../models/User')
const passport = require('passport')
let coded2 = encodeURIComponent(process.env.GAMES_SECRET);


const signPassp = passport.authenticate("local", {
  successRedirect: "class/add",
  failureRedirect: "/user/signin",
  failureFlash: true,
})

const logout =  async function(req, res) {
  await req.logout((err) => {
      if (err) return next(err);
      req.flash("success_msg", "You are logged out now.");
      res.redirect("/main");
    });
}

module.exports = {
  signPassp,
  logout
};