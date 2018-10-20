import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className="nav-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <Glyphicon glyph="home" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            About
          </NavItem>
          <NavItem eventKey={2} href="#">
            Resume
          </NavItem>
          <NavItem eventKey={3} href="#">
            Projects
          </NavItem>
          <NavItem eventKey={4} href="#">
            Contact
          </NavItem>
        </Nav>
      </Navbar>
        <header className="App-header">
          <h1>
            Hi! I'm Cameron Pavao
          </h1>
          <small>
            Welcome to my site
          </small>
        </header>
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
      </div>
    );
  }
}

export default App;
