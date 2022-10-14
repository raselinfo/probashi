const usersController = require("../controllers/user.controller");

const router = require("express").Router()

// Create Probashi
router.post("/create-user", usersController.createUser)
router.get("/get-users", usersController.getUsers)



module.exports = router;