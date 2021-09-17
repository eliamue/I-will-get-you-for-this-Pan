import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Back to Home</Link>
        </header>
      </div>
    );
  }
}
