import React, { Component } from 'react';
import './App.css';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'reactstrap';
import Home from './components/home'
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
          <Navbar bsStyle="custom">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                Cam Pavao
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem componentClass='span'>
              <Link to="/about">
                About
              </Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/resume">
                Resume
              </Link> 
            {/* <a href={pdf}>Resume</a> */}
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/projects">
                Projects
              </Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
          </Navbar>
            <Route exact path="/" component={Home} />
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
