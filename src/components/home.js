import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
        <div>
          <header className="App-header">
            <h1>
              Hi! I'm Cameron Pavao
            </h1>
            <small>
              Welcome to my site
            </small>
          </header>
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
        </div>
    );
  }
}

export default Home;
