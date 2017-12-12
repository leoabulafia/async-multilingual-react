import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import HowItWorks from './HowItWorks';

class App extends Component {
  componentDidMount() {
    this.props.fetchLanguage('es');
  }
  render() {
    const data = this.props.language;
    if (data) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navbar data={data} />
              <Route exact path="/" render={() => <Home data={data} />} />
              <Route path="/about" render={() => <About data={data} />} />
              <Route
                path="/howitworks"
                render={() => <HowItWorks data={data} />}
              />
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
