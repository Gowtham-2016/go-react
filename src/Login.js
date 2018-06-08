import React, { Component } from 'react';
import swal from 'sweetalert2';
import store from './index'
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        };
    }
    onLogin(e){
        e.preventDefault();
        var data = {
            "firstname": this.refs.username.value,
            "password": this.refs.password.value
        }
        fetch('/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if(data==200){
                    swal("Login Success","","success")
                }
                else if(data==404){
                    swal("Invalid Details","","error")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    Register(){
        this.props.history.push("/register")
    }
    render() {
        return(
            <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
              <div className="wrap-login100">
                <form className="login100-form validate-form">
                  <span className="login100-form-logo">
                    <i className="zmdi zmdi-landscape" />
                  </span>
                  <span className="login100-form-title p-b-34 p-t-27">
                    Log in
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input className="input100" ref="username" type="text" name="username" placeholder="Username" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input className="input100" ref="password" type="password" name="pass" placeholder="Password" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="contact100-form-checkbox">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={(e)=>this.onLogin(e)}>
                      Login
                    </button>
                  </div>
                  <div className="text-center p-t-90">
                    <a className="txt1" href="javascript:void(0)" onClick={(e)=>this.Register(e)}>
                      New User?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
                  
        );
    }
}

export default withRouter(Login);

