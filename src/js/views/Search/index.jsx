import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Typist from 'react-typist';
import { RadioGroup, Radio } from 'react-radio-group';
import $ from 'jquery';
import typed from './typed';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }
  getColor(match) {
    if (match < 60) {
      return '#c94444';
    } else if (match < 70) {
      return '#cfd68f';
    } else if (match < 80) {
      return '#9fce90';
    } else if (match < 90) {
      return '#9eefdb';
    } else {
      return '#eff254';
    }
  }
  render() {
    return (
      <Row>
        <Col className="doctorFields" xs={9}>
          <h2>{this.props.result.name}</h2>
          <div>{this.props.result.reasons}</div>
        </Col>
        <Col className="doctorRank" style={{backgroundColor: this.getColor(this.props.result.match)}} xs={3}>
          <div className="doctorScore">
            {this.props.result.match}
          </div>
        </Col>
      </Row>
    )
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray: [],
    }
  }
  render() {
    const componentsArray = this.props.resultsArray.map((result) => (
      <SearchResult result={result} />
    ))
    return (
      <Grid className='bgA_wrap scrollDiv styleScroll'>
        {componentsArray}
      </Grid>
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
        name: 'Cathy Kamdani',
        reasons: ['43', 'Female'],
        match: 91,

      },
      {
        name: 'Josh Marasigan',
        reasons: ['33', 'Male'],
        match: 89,

      },
      {
        name: 'Jane Smith',
        reasons: ['39', 'Female'],
        match: 87,
      },
      {
        name: 'Ryan Khalid',
        reasons: ['55', 'Male'],
        match: 87,
      },
      {
        name: 'David Nguyen',
        reasons: ['38', 'Male'],
        match: 83,
      },
      {
        name: 'Zack Lee',
        reasons: ['50', 'Male'],
        match: 78,
      },
      {
        name: 'Jacqueline Foo',
        reasons: ['49', 'Female'],
        match: 73,
      },
      {
        name: 'Matthew Mattison',
        reasons: ['61', 'Male'],
        match: 64,
      },
      {
        name: 'Ash Vu',
        reasons: ['31', 'Female'],
        match: 60,
      },
      {
        name: 'Justin Tran',
        reasons: ['38', 'Male'],
        match: 51,
      },
    ]
    this.setState({
      resultsTitle: this.inputCondition.value,
      resultsArray: resultsArray,
    })
  }

  componentDidMount() {
    $(function(){
        $(".elementTyped").typed({
            strings: ["BEST MOVE ^1000",
            "MEDICAL TRUST ^1000", "PERFECT DOCTOR ^1000"],
            typeSpeed: 10,
            startDelay: 100,
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
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
    return (
      <div className='Dashboard bgA'>
        <div className='bgA_wrap'>
          <h1>FIND YOUR</h1>
          <h1 className="elementTyped" style={{color:"#26cba2"}}></h1>
          <br/>
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
                <Radio value="male" /><span className="label">Male</span>
                <Radio value="female" /><span className="label">Female</span>
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
            <div className="centerThis">
              <Button type="submit">SUBMIT</Button>
            </div>
          </Form>
        </div>
        <SearchResults title={this.state.resultsTitle} resultsArray={this.state.resultsArray} />
      </div>
    );
  }
}
