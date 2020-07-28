import React from "react";

import { Header } from "./components";
import {Home, News} from './pages'
import { Container } from "react-bootstrap";
import {Switch, Route} from 'react-router-dom'
import firebase from './firebase'
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
