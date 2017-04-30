import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h2>MED<span className="grayText">REC</span></h2>

        <img src="http://tinyimg.io/i/btWKblI.png" />

        {/*<IndexLink className="link" to={ routeCodes.TREATMENTS }>
         	<div className="space">TREATMENTS</div>
        </IndexLink>

        <Link className="link" to={ routeCodes.REFER }>
         	<div className="space">REFER</div>
        </Link>*/}

      </div>
    );
  }
}
