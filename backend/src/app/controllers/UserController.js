const { User } = require('../models');
const faker = require('faker/locale/pt_BR');
const fetch = require('node-fetch');

class UserController {
  async dumbUser(req, res) {
    let action = req.params.action;

    let user = await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => {
        return json;
      });

    user.name = 'Dummy User';
    user.password = faker.internet.password();
    user.phone = faker.phone.phoneNumber('9####-####');

    let found = await queryUser(user);

    // User found:
    if (found) {
      if (action == 'delete') {
        await delUser(user);
      } else if (action && action != 'delete') {
        return res
          .status(200)
          .json({ message: 'Dumb User found, available action is `delete`' });
      }

      if (!action) {
        return res.status(200).json([found]);
      }
    }

    // User not found:
    if (!found) {
      if (action == 'create') {
        await createUser(user);
      } 
      // else if (action && action != 'create') {
      //   return res.status(404).json({
      //     message: 'Dumb User not found, available action is `create`',
      //   });
      // }
      if (!action) {
        return res.status(404).json({ message: 'Dumb User not found' });
      }
    }


    // Functions:
    async function queryUser(user) {
      const { name } = user;

      const found = await User.findAll({
        where: { name: name },
        plain: true,
      }).then(found => {
        return found;
      });

      return found;
    }

    async function createUser(user) {
      User.create(user).catch(err => {
        console.log('ERRO:', err);
      });
      return res.status(200).json({ message: 'User successfully created' });
    }

    async function delUser(user) {
      const { name } = user;

      User.destroy({ where: { name: name } });
      return res.status(200).json({ message: 'Dumb User deleted!' });
    }
  }
}

module.exports = new UserController();
