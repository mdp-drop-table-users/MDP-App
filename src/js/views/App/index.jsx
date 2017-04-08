import React, { Component, PropTypes } from 'react';

import SideMenu from 'components/Global/SideMenu';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <SideMenu />
        <div className='desktop'>
          { children }
        </div>
      </div>
    );
  }
}