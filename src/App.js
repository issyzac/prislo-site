import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadIndicator from './components/indicator';

class App extends Component {
  render() {
    return (
      <>
        <LoadIndicator />
      </>
    )
  }
}

export default App;
