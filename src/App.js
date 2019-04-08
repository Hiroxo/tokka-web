import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import YourPersonalVillage from "./components/YourPersonalVillage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <YourPersonalVillage/>
      </div>
    );
  }
}

export default App;
