import React, { Component } from 'react';
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Contact from './components/contact'
import Projects from './components/projects'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="inverse" light expand="md">
            <NavbarBrand >
            <NavLink tag={Link} to="/">
                Cam
              </NavLink>
            </NavbarBrand>
          <Nav className="ml-auto" navbar>           
            <NavItem >
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink tag={Link} to="/resume">
                Resume
              </NavLink> 
            </NavItem>
            <NavItem >
              <NavLink tag={Link} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
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