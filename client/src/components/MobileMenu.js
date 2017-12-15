import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../index';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';

class MobileMenu extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleLanguage(language) {
    this.props.switchLanguage(language);
    store.dispatch(push('/' + language + window.location.pathname.slice(3)));
    this.setState({ left: false });
  }

  render() {
    const data = this.props.data;
    const lang = this.props.lang;
    const sideList = (
      <div style={{ width: '250' }}>
        <List>
          <Link to={'/' + window.location.pathname.slice(1, 3)}>
            <ListItem button>
              <ListItemText primary={data.home} />
            </ListItem>
          </Link>
          <Link to={`/${lang}/about`}>
            <ListItem button>
              <ListItemText primary={data.about} />
            </ListItem>
          </Link>
          <Link to={`/${lang}/howitworks`}>
            <ListItem button>
              <ListItemText primary={data.howitworks} />
            </ListItem>
          </Link>
          <a
            href="https://github.com/leoabulafia/multilingual-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItem button>
              <ListItemText primary={data.github} />
            </ListItem>
          </a>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={this.handleLanguage.bind(this, 'es')}>
            <ListItemText primary="Castellano" />
          </ListItem>
          <ListItem button onClick={this.handleLanguage.bind(this, 'en')}>
            <ListItemText primary="English" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <div>
        <IconButton
          color="contrast"
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onRequestClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default connect(null, actions)(MobileMenu);
