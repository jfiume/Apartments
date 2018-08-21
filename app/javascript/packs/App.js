import React, { Component } from "react";
import ApartmentIndex from './components/apartment_index';
import ApartmentShow from './components/apartment_show';
import ApartmentEdit from './components/edit_apartment_form';
import ApartmentCreate from './components/create_apartment_form';

import {
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/new" component={ApartmentCreate} />
          <Route path="/:id/edit" component={ApartmentEdit} />
          <Route path="/:id" component={ApartmentShow} />
          <Route path="/" component={ApartmentIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;
