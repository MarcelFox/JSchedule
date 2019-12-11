const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
  name: "Jimmy",
  email: "jimmy@dumb.dom",
  password_hash: "verysecretword",
})

module.exports = routes
