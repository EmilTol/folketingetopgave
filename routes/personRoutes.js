const express = require('express');
const router = express.Router();
const controller = require("../controllers/personController");

router.get("/person/:id", controller.getPersonById)
router.get("/person", controller.getAllPerson);

router.post("/person", controller.createPerson);

router.put("/person/:id", controller.updatePerson);

router.delete("/person/:id", controller.deletePerson);

module.exports = router;
