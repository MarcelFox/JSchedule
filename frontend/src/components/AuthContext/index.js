import React from 'react';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isAuth: false,
  };

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  login() {
    console.log('HERE 1');
    setTimeout(() => this.setState({ isAuth: true }), 1000);
  }

  logout() {
    this.setState({ isAuth: false });
  }

  checkUser(e) {
    e.preventDefault();

    fetch('http://localhost:3000/dumbuser')
    .then(response => {
      console.log(response)
    });
  }

  checkAuth(e, email, phone) {
    e.preventDefault();

    fetch('http://localhost:3000/checkCredentials', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        phone: phone,
      }),
    }).then(response => {
      response.statusText === 'Unauthorized'
        ? alert('Invalid Credentials')
        : this.setState({ isAuth: true });

      return response.statusText;
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
          checkAuth: this.checkAuth,
          checkUser: this.checkUser,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
