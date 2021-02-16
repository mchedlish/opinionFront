import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from '../src/components/auth/SignUpComponent'
import Admin from '../src/admin/admin'
import CategoryTag from '../src/admin/crud/category-tag'
import BlogCreate from '../src/admin/crud/blog'
import User from '../src/user/index'
import reportWebVitals from './reportWebVitals';
import SignIn from '../src/components/auth/SignInComponent.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={App}/>
  <Route exact path='/signup' component={SignUp}/>
  <Route exact path='/signin' component={SignIn}/>
  <Route exact path='/admin' component={Admin}/>
  <Route exact path='/user' component={User}/>
  <Route exact path='/admin/crud/category-tag' component={CategoryTag}/>
  <Route exact path='/admin/crud/blog' component={BlogCreate}/>
  </Switch>
  
  
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
