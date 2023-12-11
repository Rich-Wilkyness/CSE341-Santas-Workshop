const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.coal);
const {isAuthenticated} = require('../middleware/authenticate');

router
    .route('/')
    .get(controller.getAll)
    .post(isAuthenticated, controller.create); // just need one and then update it, might switch to inventory and then can add new items as needed. children total, toys, coal, elves, etc.

router
    .route('/:id')
    .get(controller.getSingle)
    .put(isAuthenticated, controller.update/*
    #swagger.description = "Information for coal."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $coalInv: "Number",
            $naughtyTotal: "Number",
        }
    }
*/)
    .delete(isAuthenticated, controller.deleteEntry);

module.exports = router;