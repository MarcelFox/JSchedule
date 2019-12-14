const { User } = require('../models');
const faker = require('faker');
const fetch = require('node-fetch');

class UserController {
  async dumbUser(req, res) {
    let action = req.query.action;

    let user = await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => {
        return json;
      });

    user.password = faker.internet.password();

    User.findAll({
      where: { name: 'Dumb User' },
      plain: true,
    })
      .then(found => {
        if (!found) {
          if (action == 'create') {
            User.create({
              name: 'Dumb User',
              email: user.email,
              password_hash: user.password,
            });
            return res
              .status(200)
              .json({ message: 'Dumb User successfully created!' });
          } else {
            return res.status(200).json({ message: 'Dumb User must exist!' });
          }
        }

        if (found) {
          if (action == 'create') {
            return res
              .status(200)
              .json({ message: 'Dumb User Already exist!' });
          }

          if (action == 'delete') {
            User.destroy({ where: { name: 'Dumb User' } });
            return res.status(200).json({ message: 'Dumb User deleted!' });
          }

          if (action == 'query') {
            return res.status(200).json({ found });
          }
        }
        return res.status(200).json({ message: 'I need some action!' });
      })
      .catch(err => {
        console.log('[Query Error]:', err);
        return res.status(500).json({ message: err });
      });
  }
}

module.exports = new UserController();
