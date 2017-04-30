import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Typist from 'react-typist';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resultsArray.length > 0) {

    }
  }
  render() {
    return (
      <div className="results">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      resultsTitle: '',
      resultsArray: [],
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('patient', this.inputPatient.value);
    console.log('condition', this.inputCondition.value);
    const resultsArray = [
      {
        name: 'Hello',

        match: 46,
      }
    ]
    this.setState({
      resultsTitle: this.inputCondition.value,
      resultsArray: [],
    })
  }

  onTyped(line, lineIdx) {
    console.log(line + " " + lineIdx);
  }

  render() {
    return (
      <div className='Dashboard bgA'>
        <h1>FIND YOUR</h1>
        <h1 style={{color:"#26cba2"}}>
          <Typist onLineTyped={this.onTyped.bind(this)}>
              BEST MOVE
              <br/>
              MEDICAL TRUST
              <br/>
              PERFECT DOCTOR
          </Typist>
        </h1>

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel className="label">Select Patient</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputPatient = ref; }}>
              <option value="select">Select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel className="label">Select Condition</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputCondition = ref; }}>
              <option value="select">Select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <br/>
          <Button type="submit">Submit</Button>
        </Form>
        <SearchResults title={this.state.resultsTitle} resultsArray={this.state.resultsArray} />
      </div>
    );
  }
}
