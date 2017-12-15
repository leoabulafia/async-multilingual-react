import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

export class Home extends Component {
  render() {
    const data = this.props.data.page.home;
    return (
      <div className="container">
        <Typography type="display2" color="inherit">
          {data.header}
        </Typography>
        <Typography
          style={{ marginBottom: '2rem' }}
          type="headline"
          color="inherit"
        >
          {data.subtitle}
        </Typography>
        <Typography type="title" color="inherit">
          {data.text1}
        </Typography>
      </div>
    );
  }
}

export default Home;
