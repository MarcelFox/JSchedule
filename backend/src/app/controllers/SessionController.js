const { User } = require('../models');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({
      user,
      token: user.generateToken(),
    });
  }

  async checkCredentials(req, res) {
    const { email, phone } = req.body;
    const match = await User.findOne({
      where: { email: email, phone: phone },
      plain: true,
    })
      .then(found => {
        return found
      })

    if (match) {
      return res.status(200).send();
    }

    if (!match) {
      return res.status(401).json();
    }
  }
}

module.exports = new SessionController();
