import React, { Component } from "react";
import ApartmentIndex from './components/apartment_index';

class App extends Component {
  async getApartments() {
    try {
      const response = await fetch("/apartments");
      const apartments = await response.json();
      console.log(apartments);
    } catch (e) {
      console.error("API request raised an error:", e);
    }
  };
  componentDidMount() {
    // this.getApartments();
  }
  render() {
    return (
      <div className="App">
        <ApartmentIndex />
      </div>
    );
  }
}

export default App;
