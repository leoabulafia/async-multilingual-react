import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import { store } from '../index';

import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import HowItWorks from './HowItWorks';
import Logos from './Logos';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (window.location.pathname === '/') {
      store.dispatch(push(nextProps.language.lang));
    }
  }
  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.props.switchLanguage(window.location.pathname.slice(1, 3));
    } else {
      this.props.fetchLanguage();
    }
  }
  render() {
    const data = this.props.language;
    let match;
    if (data) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navbar data={data} match={match} />
              <div className="container">
                <Logos />
                <Route
                  exact
                  path="/(/|en|es)/"
                  render={() => <Home data={data} />}
                />
                <Route
                  path="/(en/about|es/about)/"
                  render={() => <About data={data} />}
                />
                <Route
                  path="/(en/howitworks|es/howitworks)/"
                  render={() => <HowItWorks data={data} />}
                />
              </div>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = ({ language }) => {
  return { language };
};

export default connect(mapStateToProps, actions)(App);
