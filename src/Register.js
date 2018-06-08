import React, { Component } from 'react';
import swal from 'sweetalert2';
import store from './index'
import { withRouter } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        };
    }

    onSubmit(e){
        e.preventDefault();
        var data = {
            "firstname": this.refs.username.value,
            "password": this.refs.password.value
        }
        fetch('/register', {
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
                    swal("Successfully Registered","","success")
                    .then((value)=>{
                        this.props.history.push("/login")
                    })
                }
                else{
                    swal("Error","","Error")
                }
            })
            .catch((err) => {
                swal("Error","",err)
            })
    }
    Login(){
        this.props.history.push("/login")
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
                    Sign UP
                  </span>
                  <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="FirstName" placeholder="FirstName" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="LastName" placeholder="LastName" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input className="input100" ref="username" type="text" name="username" placeholder="Username" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input className="input100" ref="password" type="password" name="pass" placeholder="Password" />
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={(e)=>this.onSubmit(e)}>
                      Register
                    </button>
                  </div>
                  <div className="text-center p-t-90">
                    <a className="txt1" href="javascript:void(0)" onClick={(e)=>this.Login(e)}>
                      Already Registered?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
                  
        );
    }
}

export default withRouter(Register);

