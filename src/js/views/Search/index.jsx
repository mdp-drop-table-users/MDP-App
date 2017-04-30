import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Typist from 'react-typist';
<<<<<<< HEAD
import { RadioGroup, Radio } from 'react-radio-group';

=======
import typed from './typed.js';
import $ from 'jquery';
>>>>>>> 7ba79307d2c388cde3823e3ac1512baa70dd2651

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
      typeIndex: 0,
      selectedValue: 'male',
    }
    this.handleChange = this.handleChange.bind(this)
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

  componentDidMount() {
    $(function(){
        $(".elementTyped").typed({
            strings: ["BEST MOVE ^1000", "MEDICAL TRUST ^1000", "PERFECT DOCTOR ^1000"],
            typeSpeed: 15,
            startDelay: 100,
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: 2,
        // show cursor
        showCursor: false,
        // character for cursor
        });
    });
  }

  onTyped(line, lineIdx) {
    console.log(line + " " + lineIdx);
    this.setState({typeIndex: this.state.typeIndex++});
  }

  handleChange(value) {
    this.setState({selectedValue: value});
    console.log('handleChange', value)
  }

  render() {
    const typeArray = [
      'BEST MOVE',
      'MEDICAL TRUST',
      'DOCTOR',
    ]
    return (
      <div className='Dashboard bgA'>
        <h1>FIND YOUR</h1>
        <h1 className="elementTyped" style={{color:"#26cba2"}}></h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel className="label">Select Patient</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputPatient = ref; }}>
              <option value="select">Select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <RadioGroup className='radio-buttons' selectedValue={this.state.selectedValue} onChange={this.handleChange}>
              <Radio value="male" />Male
              <Radio value="female" />Female
            </RadioGroup>
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
