/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import AuthService from "../../services/auth-service";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getLoginToken } from "../../store/actions";

const Header = (props) => {

  const logOut = () => {
    props.getLoginToken(AuthService.logout());
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark">
        <Link to={"/"} className="navbar-brand">
          <h3>NEWS TIMES</h3>
        </Link>

        {props.access_token ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="d-flex justify-content-end m-t10 p-r10">
                <Link className="btn btn-md logout rounded-0" to="/login" onClick={logOut}>Logout</Link>
              </div>
            </li>
          </div>
        ):(
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="d-flex justify-content-end m-t10 p-r10">
                <Link className="btn btn-md logout rounded-0" to="/login">Login</Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="d-flex justify-content-end m-t10 p-r10">
                <Link className="btn btn-md logout rounded-0" to="/register">Signup</Link>
              </div>
            </li>
          </div>
        )}
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { access_token } = state;
  return { access_token };
};

export default connect(mapStateToProps, { getLoginToken })(Header);