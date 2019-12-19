import React from 'react';
import './styles.css';
import { AuthConsumer } from '../AuthContext';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      user: [],
    };

    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }


  async componentDidMount() {
    await fetch('http://localhost:3000/dumbuser/create')
      .then(console.log('OOKOK'));

    fetch('http://localhost:3000/dumbuser')
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json });
      });
  }

  render() {
    return (
      <AuthConsumer>
        {context =>
          context.isAuth ? (
            <div className="container" id="main">
              <div className="user-data">
                <h1>Welcome to the Home Page!</h1>
                <br />
                <p>
                  Ok you're already logged in! Checkout the{' '}
                  <Link to="/dashboard">Dashboard</Link>.
                </p>
              </div>
            </div>
          ) : (
            <div className="container" id="main">
              {this.state.user.map(e => {
                return (
                  <div className="user-data" key={e.id}>
                    <h1>Welcome to the Home Page!</h1>
                    <br />
                    <p>Here folows some details of your user:</p>
                    <ul>
                      <li>
                        <b>Name: </b>
                        {e.name}
                      </li>
                      <li>
                        <b>Email:</b> {e.email}
                      </li>
                      <li>
                        <b>Phone:</b> {e.phone}
                      </li>
                    </ul>
                    <br />
                    <p>
                      The user data above is provided straight from database,
                      passing through our backend's api! Use these on login <i>context</i>!
                    </p>
                    <p>
                  Ok you're not logged in! You cannot access the{' '}
                  <Link to="/dashboard">Dashboard</Link> if your not logged.
                </p>
                  </div>
                );
              })}
            </div>
          )
        }
      </AuthConsumer>
    );
    //   {(context) => (
    //   <div className='container' id='main'>
    //     <h1>Hello World</h1>
    //     <p>Aqui: {context.isAuth ? 'true' : 'false'}</p>
    //     <button onClick={context.checkUser}>OK</button>
    //   </div>

    //   )}
    // </AuthConsumer>
  }
}
