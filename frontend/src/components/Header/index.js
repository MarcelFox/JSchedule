import React from 'react';
import { AuthConsumer } from '../AuthContext';
import { Link } from 'react-router-dom';

export default () => (
  <AuthConsumer>
    {(context) => (
      <header>
        {context.isAuth ? (
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={(e) => context.logout()}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled">
                Dashboard
              </p>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
      </header>
    )}
  </AuthConsumer>

  // <header>
  //   <AuthConsumer>
  //     {({ isAuth, login, logout }) => (

  //       <div style={headerStyle}>
  //         <h3>
  //           <Link style={linkStyle} to="/">
  //             HOME
  //           </Link>
  //           <Link style={linkStyle} to="/login">
  //             LOGIN
  //           </Link>
  //         </h3>

  //         {isAuth ? (
  //           <ul>
  //             <Link style={linkStyle} to="/dashboard">
  //               Dashboard
  //             </Link>
  //             <button onClick={logout}>logout</button>
  //           </ul>
  //         ) : (
  //           <button onClick={login}>login</button>
  //           // <Link to='/login'>login</Link>
  //         )}
  //       </div>
  //     )}
  //   </AuthConsumer>
  // </header>
);
