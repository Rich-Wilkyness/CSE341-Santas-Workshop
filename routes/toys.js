const app = require('express');
const router = app.Router();
const db = require("../models/index");

const controller = require("../controllers/toys")(db.toys);
//const {isAuthenticated} = require('../middleware/authenticate');

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteEntry);

module.exports = router;