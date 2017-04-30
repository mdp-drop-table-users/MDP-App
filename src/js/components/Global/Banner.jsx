import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h2>MEDREC</h2>
        <img src="http://tinyimg.io/i/btWKblI.png" />
        <IndexLink className="link" to={ routeCodes.TREATMENTS }>
         	<div>| TREATMENTS</div>
        </IndexLink>
        <Link className="link" to={ routeCodes.REFER }>
         	<div>REFER |</div>
        </Link>
      </div>
    );
  }
}
