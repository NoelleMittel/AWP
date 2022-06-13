import React, { Component } from 'react';
import Link from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <main>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/posts">All Posts</Link>
          <img src="/images/bookwvines" height="100" />
        </nav>
      </main>
    );
  }
}

export default NavBar;
