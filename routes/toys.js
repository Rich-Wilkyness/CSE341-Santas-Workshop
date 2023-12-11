const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.toys);
const {isAuthenticated} = require('../middleware/authenticate');

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);
router.post("/", isAuthenticated, controller.create
/*
        #swagger.description = "Information for toy."
        #swagger.parameters["body"] = {
            "in": "body",
            "schema": {
                $name: "String",
                $price: "Number",
            }
        }
    */);
router.put("/:id", isAuthenticated, controller.update
/*
        #swagger.description = "Information for toy."
        #swagger.parameters["body"] = {
            "in": "body",
            "schema": {
                $name: "String",
                $price: "Number",
            }
        }
    */);
router.delete("/:id", isAuthenticated, controller.deleteEntry);

module.exports = router;