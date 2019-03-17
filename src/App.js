import React, { Component } from 'react'
import './App.styles'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import { Route, Switch } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

class App extends Component {
  render() {
    return (
      <section>
        <Navigation />
        <Route to="/" component={Home} />
        <Route to="about" component={About} />
        <Route to="resume" component={Resume} />
        <Route to="portfolio" component={Portfolio} />
      </section>
    )
  }
}

export default App
