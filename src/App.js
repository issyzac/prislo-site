import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import LoadIndicator from './components/indicator'
import Header from './components/header'
import Banner from './components/banner'
import AboutSection from './components/about'
import TopHeader from './components/Topheader'
import Footer from './components/footer'
import Products from './components/products'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <AboutSection />
        <Products />
        <Footer />
      </div>
    )
  }
}

export default App;
