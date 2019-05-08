const router = require("express").Router()
const models = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Get All Data
exports.getAllUsers = async (req, res) => {
  const findAllUsers = await models.users.findAll()
  res.send(findAllUsers)
}

// Insert one user
exports.insertUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(7)
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    const addUser = await models.users.create(req.body)
    res.send(addUser)
  } catch (err) {
    res.send(err)
  }
}

// Delete one user
exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await models.users.findByPk(req.params.id)

    await deleteUser.destroy() // destroy = delete
    res.send(`success`)
  } catch (err) {
    res.send(err)
  }
}

// Update Data
exports.updateUser = async (req, res) => {
  try {
    const alterUser = await models.users.findByPk(req.params.id)

    await alterUser.update({
      name: req.body.name,
      emaii: req.body.email,
      password: req.body.password,
      address: req.body.address
    })
    res.send(`update success`)
  } catch (error) {
    res.send(error)
  }
}

// Login
exports.Login = async (req, res) => {
  // find user email in database
  const user = await models.users.findOne({ where: { email: req.body.email } })

  if (user === null) return res.send("Account not found")

  // compare password from user input to passwrord stored in database
  const validPassword = await bcrypt.compare(req.body.password, user.password)

  if (!validPassword) return res.send("password is not valid")

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  res.send({
    message: "You are logged in",
    token: token
  })
}
