import React, { Component } from 'react';
import logo from './logo.svg'; 

class Header extends Component {
    render(){
      return(
        <img src={logo} className="App-logo" alt="logo" />
      )
    }
}

export default Header;