const router = require("express").Router()
const models = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const controller = require("./controller")

// Get All Data
router.get("/", controller.getAllUsers)

// Insert one user
router.post("/", controller.insertUser)

// Delete one data
router.delete("/:id", controller.deleteUser)

// Update Data
router.put("/:id", controller.updateUser)

// Login
router.post("/login", controller.Login)

module.exports = router
