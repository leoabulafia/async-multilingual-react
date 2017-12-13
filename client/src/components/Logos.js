import React, { Component } from 'react';

import reactLogo from '../logos/react.png';
import reduxLogo from '../logos/redux.png';
import reactRouterLogo from '../logos/react-router.png';

let styles = {
  images: {
    padding: '0.5em',
    maxHeight: '80px',
    maxWidth: '80px',
    width: 'auto',
    height: 'auto'
  }
};

class Logos extends Component {
  render() {
    return (
      <div>
        <img style={styles.images} alt="React Logo" src={reactLogo} />
        <img style={styles.images} alt="Redux Logo" src={reduxLogo} />
        <img
          style={styles.images}
          alt="React Router Logo"
          src={reactRouterLogo}
        />
      </div>
    );
  }
}

export default Logos;
