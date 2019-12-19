const moment = require('moment')

class ScheduleController {
  test(req, res){
    moment.locale('pt_BR')
    
    let { date, period } = req.body;

    date = '26/07/2019'
    

    // // Isso fica melhor no front end:
    // let dates = []
    // for (let i = 1; i < 11; i++) {
    //   dates.push(moment().add(i, 'days').format('DD/MM/YYYY'))
    // }

    // console.log(dates)

    let today = moment().format('DDMMYYYY')
    let weekDay = moment(date, 'DD/MM/YYYY').format('dddd')
    let nextDay = moment().add(1, 'days').format('DD/MM/YYYY')

    if(weekDay == 'Sexta-feira'){
      console.log('OK')
    }

    console.log(weekDay)
    console.log(moment().format('HH:mm'))

    res.status(200).json({data: moment().format('DD/MM/YYYY')})
  }
}

module.exports = new ScheduleController();