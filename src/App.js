import React,{useState} from 'react'
import Form from './Components/Form'
import SignIn from './Components/SignIn'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css'


export default function App() {

  return (
    <div className="app">
      <Router>
      <Switch>
          <Route exact path='/' >
            <Form/>
         </Route>
          <Route exact path='/sign'>
              <SignIn /> 
          </Route>
      
     </Switch>
     </Router>
    
    </div>


  )
}
