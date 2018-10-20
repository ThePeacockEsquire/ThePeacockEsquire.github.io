import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import About from './components/about'
import Resume from './components/resume'
import Contact from './components/contact'
import Projects from './components/projects'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>
              Hi! I'm Cameron Pavao
            </h1>
            <small>
              Welcome to my site
            </small>
          </header>
          <Navbar bsStyle="nav-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Glyphicon glyph="home" />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/about">
                About
              </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/resume">
                Resume
              </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/projects">
                Projects
              </Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
          </Navbar>
          <body>
            <h2>
              Socials
            </h2>
            <div >
              <a href="https://www.linkedin.com/in/cameron-pavao-0928b2140/">
                <img width={50} height={50} alt="25" src="/linkedin.ico" className='socials' />
              </a>
              <a href="https://www.twitter.com/allcamadianeh">
                <img width={50} height={50} alt="25" src="/twitter.ico" className='socials' />
              </a>
              <a href="mailto:cameronpavao@gmail.com">
                <img width={50} height={50} alt="25" src="/mail.ico" className='socials' href=""/>
              </a>
              <a href="https://www.instagram.com/camcorderpavao">
                <img width={50} height={50} alt="25" src="/instagram.ico" className='socials' />
              </a>
            </div>
          </body>


          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
