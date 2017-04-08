import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Calendar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Calendar'>
        This is the calendar view.
      </div>
    );
  }
}
