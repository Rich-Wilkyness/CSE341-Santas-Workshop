const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers")(db.coal);
//const {isAuthenticated} = require('../middleware/authenticate');

router
    .route('/')
    .get(controller.getAll)
    .post(controller.create);

router
    .route('/:id')
    .get(controller.getSingle)
    .put(controller.update)
    .delete(controller.deleteEntry);

module.exports = router;