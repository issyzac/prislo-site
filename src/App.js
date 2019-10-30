import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import LoadIndicator from './components/indicator'
import Header from './components/header'
import Banner from './components/banner'
import AboutSection from './components/about'
import TopHeader from './components/Topheader'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <AboutSection />
      </div>
    )
  }
}

export default App;
