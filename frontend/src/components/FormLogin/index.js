import React from 'react';
import { AuthConsumer } from '../AuthContext';
import './styles.css';
import { Redirect } from 'react-router';

export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users/1')
    fetch('http://localhost:3000/dumbuser')
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data, loading: false });
      });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  render() {
    return (
      <AuthConsumer>
        {context => (
          <div className="container" id="login-form">
            {context.isAuth ? <Redirect to="/" /> : <p></p>}
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1">Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputphone1"
                  placeholder="phone"
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  You must provide the number as 'xxxxx-xxxx'.
                </small>
              </div>
              <button className="btn btn-primary"
                onClick={e =>
                  context.checkAuth(e, this.state.email, this.state.phone)
                }
              >
                submit
              </button>
            </form>
          </div>
        )}
      </AuthConsumer>
    );
  }
}
