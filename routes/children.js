const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.children);
//const {isAuthenticated} = require('../middleware/authenticate');

router
    .route('/')
    .get(controller.getAll)
    .post(controller.create/*
    #swagger.description = "Information for children."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $name: "String",
            $naughty: "Boolean",
            $gift: "String",
        }
    }
*/);

router
    .route('/:id')
    .get(controller.getSingle)
    .put(controller.update/*
    #swagger.description = "Information for children."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $name: "String",
            $naughty: "Boolean",
            $gift: "String",
        }
    }
*/)
    .delete(controller.deleteEntry);

module.exports = router;