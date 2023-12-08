const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.coal);
//const {isAuthenticated} = require('../middleware/authenticate');

router
    .route('/')
    .get(controller.getAll)
    .post(controller.create/*
    #swagger.description = "Information for coal."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $coalInv: "Number",
            $naughtyTotal: "Number",
        }
    }
*/);

router
    .route('/:id')
    .get(controller.getSingle)
    .put(controller.update/*
    #swagger.description = "Information for coal."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $coalInv: "Number",
            $naughtyTotal: "Number",
        }
    }
*/)
    .delete(controller.deleteEntry);

module.exports = router;