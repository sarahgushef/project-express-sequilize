const router = require("express").Router()

const controller = require("./controller")
const helpers = require("../helpers/index.js")

// Get All Data
router.get("/", helpers.isAuthenticated, controller.getAllUsers)

// Insert one user
router.post("/", controller.insertUser)

// Delete one data
router.delete("/:id", controller.deleteUser)

// Update Data
router.put("/:id", controller.updateUser)

// Login
router.post("/login", controller.Login)

module.exports = router
