import React from 'react'
import "./App.css"
// import Hero from './components/Hero/Hero'
import LinkValidator from './components/LinkValidator/LinkValidator'
import TwitterCardValidator from './components/TwitterCardValidator/TwitterCardValidator'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <LinkValidator/>
      <TwitterCardValidator/>
      <Footer/>
    </div>
  )
}

export default App