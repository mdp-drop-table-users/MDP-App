import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Search extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Dashboard'>
        Hello!! This is the search/referrals main page
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}
