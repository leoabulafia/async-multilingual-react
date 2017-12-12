import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    const data = this.props.data.page.home;
    return (
      <div>
        <h1>{data.header}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.text1}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ language }) => {
  return { language };
};

export default Home;
