import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../index';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import GithubCircle from 'mdi-material-ui/GithubCircle';

class SwitchLang extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleLanguage(language) {
    this.props.switchLanguage(language);
    store.dispatch(push('/' + language + window.location.pathname.slice(3)));
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <IconButton>
          <a
            href="https://github.com/leoabulafia/multilingual-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubCircle color="#fff" />
          </a>
        </IconButton>
        <IconButton
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <ArrowDropDown color="#fff" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleLanguage.bind(this, 'es')}>
            Castellano
          </MenuItem>
          <MenuItem onClick={this.handleLanguage.bind(this, 'en')}>
            English
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default connect(null, actions)(SwitchLang);
