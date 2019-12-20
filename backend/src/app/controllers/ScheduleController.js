const moment = require('moment');
const { Schedule } = require('../models');
const sequelize = new require('../../config/database');

class ScheduleController {
  async save(req, res) {
    const { period, name, date } = req.body;

    let obj = {
      name: name,
      period: period,
      date: date,
    };

    let dateQry = moment(date).format('YYYY-MM-DDT') + '00:00:00.000Z';
    let dataLen = await Schedule.findAll({
      where: { date: dateQry },
    }).then(data => {
      return data.length;
    });

    if (dataLen >= 5) {
      return res.status(402).json({message: 'Not Saved'});
    } else {
      Schedule.create(obj).catch(err => {
        console.log('ERRO:', err);
      });
      return res.status(200).json([obj]);
    }
  }
}

module.exports = new ScheduleController();
