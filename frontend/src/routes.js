import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import FormLogin from './components/FormLogin'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={FormLogin} />
          <Route path="/about" component={About} />
        </Switch>
      </AuthProvider>
    </Router>
    );
  }
}

export default Routes;