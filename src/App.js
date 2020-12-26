import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';



class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Intro/>
        </header>
      </div>
    );
  }
  
}

export default App;
