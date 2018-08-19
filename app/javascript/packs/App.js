import React, { Component } from "react";
import ApartmentIndex from './components/apartment_index';
import ApartmentShow from './components/apartment_show';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

        </header>
        <Switch>
          <Route path="/:id" component={ApartmentShow} />
          <Route path="/" component={ApartmentIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;
