import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login from './Login.js';
import register from './Register.js';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'



const App = () =>(
  <Router>
          <div>
          <Route path="/login" component={login}/>
          <Route path="/register" component={register}/>
          </div>
  </Router>
)

export default App;
