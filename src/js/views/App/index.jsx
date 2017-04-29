import React, { Component, PropTypes } from 'react';

import SideMenu from 'components/Global/SideMenu';
import Banner from 'components/Global/Banner';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Banner />
        <div className='desktop'>
          { children }
        </div>
      </div>
    );
  }
}
