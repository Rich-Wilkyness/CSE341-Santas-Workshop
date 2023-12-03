const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers/toys");
const {isAuthenticated} = require('../middleware/authenticate');

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);