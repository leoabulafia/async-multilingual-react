import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import SwitchLang from './SwitchLang';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Navbar extends Component {
  render() {
    const lang = this.props.data.lang;
    const data = this.props.data.page.navbar;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <MobileMenu data={data} lang={lang} />
            <Typography type="title" color="inherit">
              Async Multilingual React
            </Typography>
            <div style={{ flex: '1 1 auto' }} />
            <Hidden only={['xs', 'sm']}>
              <Link to={'/' + window.location.pathname.slice(1, 3)}>
                <Button color="contrast">{data.home}</Button>
              </Link>
              <Link to={`/${lang}/about`}>
                <Button color="contrast">{data.about}</Button>
              </Link>
              <Link to={`/${lang}/howitworks`}>
                <Button color="contrast">{data.howitworks}</Button>
              </Link>
              <SwitchLang />
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
