const routes = require('express').Router()
const { User } = require('./app/models')


User.findAll({where: {email: 'jimmy@dumb.dom'}, plain: true})
.then(found => {
  if (!found) {
    User.create({
      name: 'Jimmy',
      email: 'jimmy@dumb.dom',
      password_hash: 'verysecretword',
    })
  }
})
.catch(err =>{
  console.log('[Query Error]:', err)
})

module.exports = routes
 