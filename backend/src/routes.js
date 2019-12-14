const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');
const UserController = require('./app/controllers/UserController');

routes.post('/sessions', SessionController.store);

routes.get('/dumbuser', UserController.dumbUser);

// From this point it uses authMiddleware routes:
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
