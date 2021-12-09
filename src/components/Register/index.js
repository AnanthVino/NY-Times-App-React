import React, { useState } from "react";
import './register.scss';
import AuthService from "../../services/auth-service";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
      AuthService.register(email, password).then(
        (response) => {
          window.location.href = '/login'
        },
        (error) => {
          console.log(error)
        }
      );
  };

  return (
    <div className="container m-t100">
      <div className="row">
        <div className="col-md-12"> 
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card rounded-0">
                <div className="card-header">
                  <h3 className="mb-0">Register</h3>
                </div>
                <div className="card-body">
                  <form className="form" id="formUser" name="formUser" onSubmit={handleRegister}>
                    <div className="form-group">
                      <label>Email</label> 
                      <input 
                        className="form-control rounded-0" 
                        type="text"
                        name="email"
                        onChange={onChangeEmail}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label> 
                      <input 
                        className="form-control rounded-0" 
                        type="password"
                        name="password"
                        onChange={onChangePassword}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-lg save rounded-0">Signup</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Register;
