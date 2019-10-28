import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadIndicator from './components/indicator';
import Header from './components/header';
import Banner from './components/banner';

class App extends Component {
  render() {
    return (
      <>
        {/* <LoadIndicator /> */}
        <Header />
        <Banner />
      </>
    )
  }
}

export default App;
