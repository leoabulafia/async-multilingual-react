import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SwitchLang from './SwitchLang';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class Navbar extends Component {
  render() {
    const data = this.props.data.page.navbar;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Async Multilingual React
            </Typography>
            <div style={{ flex: '1 1 auto' }} />
            <Link to="/">
              <Button color="contrast">{data.home}</Button>
            </Link>
            <Link to="/about">
              <Button color="contrast">{data.about}</Button>
            </Link>
            <Link to="/howitworks">
              <Button color="contrast">{data.howitworks}</Button>
            </Link>
            <SwitchLang />
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
