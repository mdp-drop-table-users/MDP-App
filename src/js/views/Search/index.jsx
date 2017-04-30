import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class Search extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Dashboard bgA'>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Patient</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Condition</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <Button>Submit</Button>
      </div>
    );
  }
}
