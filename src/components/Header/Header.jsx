import React from 'react';
import { Component } from 'react';

class Header extends Component {
  render() {
    return <header className="header">{this.props.title}</header>;
  }
}

export default Header;
