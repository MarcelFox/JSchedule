import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import './styles.css';

export default function MaterialUIPickers() {
  const [period, setPeriod] = React.useState('');

  const handleRadioChange = event => {
    setPeriod(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new moment().format());
  const [name, setName] = React.useState('');

  const [weekday, setWeekday] = React.useState(moment().format('dddd'));
  let minDate = '';

  weekday === 'Sexta-feira'
    ? moment().format('HHmm') > 1800
      ? (minDate = moment().add(3, 'days'))
      : (minDate = moment().add(1, 'days'))
    : moment().format('HHmm') > 1800
    ? (minDate = moment().add(2, 'days'))
    : (minDate = moment().add(1, 'days'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleInputChange = event => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  function handleSave() {
    let pickDate = moment(selectedDate).format('YYYY-MM-DD');

    fetch('http://localhost:3000/schedule', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        date: pickDate,
        period: period,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  return (
    <div className="container">
      <Grid container spacing={3}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={2} />

          <Grid id="main-text-jschedule" item xs={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mattis faucibus ex eget ultricies. Proin efficitur dignissim
              gravida. Pellentesque ornare eros ut metus egestas ullamcorper.
              Aliquam sed lorem sit amet ante euismod ultricies consectetur in
              magna. Praesent dictum tristique arcu, vel aliquam metus imperdiet
              in. Ut suscipit, felis iaculis vulputate rhoncus, lectus mi
              lacinia ex, at tristique lectus magna vel massa. Aliquam rutrum,
              velit at mollis aliquam, massa ante lobortis ligula, non viverra
              nunc urna ut nibh. Donec volutpat malesuada elit, vitae ultricies
              lorem gravida sit amet. Vestibulum dapibus metus sed viverra
              rhoncus. Nam scelerisque diam eget dignissim posuere. Nunc elit
              quam, dapibus eget feugiat nec, pulvinar vitae ligula. Maecenas
              dapibus arcu sed dictum aliquam. Nulla eros leo, congue eu egestas
              nec, sodales a velit. Nullam sem enim, interdum vel purus sed,
              accumsan congue turpis.
            </p>
            <p>
              Vestibulum vel aliquet eros, sit amet interdum erat. Sed nibh
              risus, fermentum nec varius a, tincidunt et neque. Phasellus sit
              amet orci dui. Integer libero nunc, ornare id ligula eu, tincidunt
              tempus risus. Praesent condimentum faucibus dolor, a feugiat nunc
              interdum in. Nunc vitae luctus enim. Cras dignissim rhoncus massa
              a mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec consectetur ex. Proin eget massa dolor. Donec non
              tortor magna. In ac interdum purus, at congue urna. Nulla aliquam
              tincidunt laoreet.
            </p>
          </Grid>
          <Grid id="date-picker" item xs={3}>
            <h4>JSchedule</h4>

            <h5>Name:</h5>
            <TextField
              onChange={handleInputChange}
              id="outlined-basic"
              label="Patient's Name"
              variant="outlined"
            />

            <h5>Date:</h5>
            <DatePicker
              ampm={false}
              minDate={minDate}
              minDateMessage="Schedules are now closed, check available dates on calendar"
              maxDate={moment().add(9, 'days')}
              inputVariant="outlined"
              value={minDate}
              onChange={handleDateChange}
            />

            <h5>Period:</h5>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Period"
                name="period"
                value={period}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="morning"
                  control={<Radio />}
                  label="morning"
                />
                <FormControlLabel
                  value="afternoon"
                  control={<Radio />}
                  label="afternoon"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <Button
              id="date-button"
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Send
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      <div className="date-picker"></div>
    </div>
  );
}
