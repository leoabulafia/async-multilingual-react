import React, { Component } from 'react';
import MenuIcon from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

class MenuResp extends Component {
  render() {
    return (
      <IconButton color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
    );
  }
}

export default MenuResp;
