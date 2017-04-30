import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

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

      }
    ]
    this.setState({
      resultsTitle: 'Hi',
      resultsArray: [],
    })
  }
  render() {
    return (
      <div className='Dashboard bgA'>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Patient</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputPatient = ref; }}>
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Condition</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputCondition = ref; }}>
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        <SearchResults title={this.state.resultsTitle} resultsArray={this.state.resultsArray} />
      </div>
    );
  }
}
