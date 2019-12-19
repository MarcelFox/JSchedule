const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');
const UserController = require('./app/controllers/UserController');
const ScheduleController = require('./app/controllers/ScheduleController');

routes.post('/sessions', SessionController.store);
routes.post('/checkCredentials', SessionController.checkCredentials);

routes.get('/dumbuser', UserController.dumbUser);
routes.get('/dumbuser/:action', UserController.dumbUser);

routes.get('/schedule', ScheduleController.test);

// From this point it uses authMiddleware routes:
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
