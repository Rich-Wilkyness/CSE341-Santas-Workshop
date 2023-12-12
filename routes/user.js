const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.user);
const {isAuthenticated} = require('../middleware/authenticate');

router
    .route('/')
    .get( controller.getAll)
    .post( isAuthenticated, controller.create/*
    #swagger.description = "Information for user."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $admin: "Boolean",
            $name: "String",
            $jobTitle: "String",
            $password: "String",
            $performance: "String",
            $married: "Boolean",
            $age: "Number",
        }
    }
*/);

router
    .route('/:id')
    .get(controller.getSingle)
    .put( isAuthenticated, controller.update/*
    #swagger.description = "Information for user."
    #swagger.parameters["body"] = {
        "in": "body",
        "schema": {
            $admin: "Boolean",
            $name: "String",
            $jobTitle: "String",
            $password: "String",
            $performance: "String",
            $married: "Boolean",
            $age: "Number",
        }
    }
*/)
    .delete( isAuthenticated, controller.deleteEntry);

module.exports = router;