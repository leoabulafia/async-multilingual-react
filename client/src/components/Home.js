import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import image from '../logos/translate.png';

export class Home extends Component {
  render() {
    const data = this.props.data.page.home;
    return (
      <div className="container">
        <h1>{data.header}</h1>
        <h2>{data.subtitle}</h2>
        <div className="landing">
          <p>{data.text1}</p>
          <img className="image" alt="Multilingual React" src={image} />
        </div>
      </div>
    );
  }
}

export default Home;
