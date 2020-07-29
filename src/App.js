import React from "react";

import { Header } from "./components";
import {Home, News, NewsUpdate} from './pages'
import { Container } from "react-bootstrap";
import {Switch, Route} from 'react-router-dom'
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/news/update/:id" component={NewsUpdate}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
