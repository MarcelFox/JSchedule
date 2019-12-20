import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';
import * as moment from 'moment';
import 'moment/locale/pt-br';

import './styles.css';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new moment().format());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <Grid container spacing={3}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={2} />

          <Grid id='main-text-jschedule' item xs={6}>
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
            <br / >
            <DateTimePicker
              label="DateTimePicker"
              minDate={moment().format()}
              maxDate={moment().add(9, 'days')}
              inputVariant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
            />

            <Button id="date-button" variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      <div className="date-picker"></div>
    </div>
  );
}
