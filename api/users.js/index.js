const router = require("express").Router()
const models = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const controller = require("./controller")

// Get All Data
router.get(
  "/",
  (req, res, next) => {
    // 1. Get token
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1]

    if (!token) {
      return res.send("Token not found")
    }

    // 2. Verify token

    next() // this syntax is for continue to the controller.getAllUsers, if we have token
  },
  controller.getAllUsers
)

// Insert one user
router.post("/", controller.insertUser)

// Delete one data
router.delete("/:id", controller.deleteUser)

// Update Data
router.put("/:id", controller.updateUser)

// Login
router.post("/login", controller.Login)

module.exports = router
