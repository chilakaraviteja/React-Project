import React, { Component } from 'react';


class Intro extends Component {
    render(){
      return(
        <div>
        <h2>Welcome to ReactJs...   </h2>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
      )
    }
  }

  export default Intro;