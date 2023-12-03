// Make other files in the routes folder, send them there based on what the url is
const express = require("express");
const passport = require("passport");
const app = express();

const router = express.Router();
const path = require('path');

router.use("/", require("./swagger"));

router.use("/toys", require("./toys"));