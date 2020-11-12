import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { Container, Spinner } from 'react-bootstrap';
import './App.css';
import firebase from "./config/firebase";

function App() {

  const [firebaseInit, setfirebaseInit] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setfirebaseInit(val)
    })
  })

  return firebaseInit !== false ? (
    (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  ) :  <Container><Spinner animation="border"/></Container>
}

export default App;
