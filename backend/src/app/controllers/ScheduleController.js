const moment = require('moment');
const { Schedule } = require('../models');

class ScheduleController {
  async save(req, res) {
    const { period, name, date } = req.body;

    let obj = {
      name: name,
      period: period,
      date: date,
    };

    Schedule.create(obj).catch(err => {
      console.log('ERRO:', err);
    });
    return res.status(200).json([obj]);
  }
}

module.exports = new ScheduleController();
