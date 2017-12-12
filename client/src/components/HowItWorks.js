import React, { Component } from 'react';

class HowItWorks extends Component {
  render() {
    const data = this.props.data.page.howitworks;
    return (
      <div>
        <h1>{data.header}</h1>
        <p>{data.text1}</p>
        <p>{data.text2}</p>
        <p>{data.text3}</p>
      </div>
    );
  }
}

export default HowItWorks;
