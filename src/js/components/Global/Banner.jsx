import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img height="42" width="42" src="http://tinyimg.io/i/vRreWOs.png" />
        <h1>MEDREC</h1>
        <IndexLink className="link" to={ routeCodes.TREATMENTS }>
          <div>Treatments</div>
        </IndexLink>
        <Link className="link" to={ routeCodes.REFER }>
          <div>Refer</div>
        </Link>
      </div>
    );
  }
}
