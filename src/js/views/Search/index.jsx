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
      return '#eff254';
    } else if (match < 90) {
      return '#9eefdb';
    } else {
      return '#1be59e';
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
    const {resultsArray, loading} = this.props;
    const componentsArray = resultsArray.map((result) => (
      <SearchResult result={result} />
    ))
    return (
      <Grid className='bgA_wrap'>
        <div className="loader" style={loading ? {} : {display: 'none'}}></div>
        <h2 style={resultsArray.length == 0 ? {display:'none'} : {}}>HEALTHCARE PROVIDERS</h2>

        <div className='scrollDiv styleScroll'>
          {componentsArray}
        </div>
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
      loading: false,
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
      loading: true,
      resultsArray: [],
    });
    const tempThis = this;
    setTimeout(() => {
      tempThis.setState({
        resultsTitle: this.inputCondition.value,
        resultsArray: resultsArray,
        loading: false,
      })
    }, 3000);
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
              <ControlLabel className="label">Condition</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputCondition = ref; }}>
                <option value>Pregnancy and Childbirth</option>
                <option value>Inflammatory Bowel Disease</option>
                <option value>Overactive Bladder</option>
                <option value>Colorectal Cancer</option>
                <option value>Breast Cancer</option>
                <option value>Heart Failure</option>
                <option value>Older Person</option>
                <option value>Craniofacial Microsomia</option>
                <option value>Dementia</option>
                <option value>Coronary Artery Disease</option>
                <option value>Localized Prostate Cancer</option>
                <option value>Low Back Pain</option>
                <option value>Cataracts</option>
                <option value>Parkinson’s Disease</option>
                <option value>Depression and Anxiety</option>
                <option value>Advanced Prostate Cancer</option>
                <option value>Cleft Lip and Palate</option>
                <option value>Lung Cancer</option>
                <option value>Hip and Knee Osteoarthritis</option>
                <option value>Stroke</option>
                <option value>Macular Degeneration</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="age">
              <ControlLabel className="label">Age</ControlLabel>
              <FormControl type="number" />
            </FormGroup>
            <FormGroup>
              <RadioGroup className='radio-buttons' selectedValue={this.state.selectedValue} onChange={this.handleChange}>
                <Radio value="male" /><span className="label">Male</span>
                <Radio value="female" /><span className="label">Female</span>
              </RadioGroup>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel className="label">Ethnicity</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.inputPatient = ref; }}>
                <option value="select">White</option>
                <option value="other">Asian</option>
                <option value="black">Black</option>
                <option value="hispanic">Hispanic</option>
              </FormControl>
            </FormGroup>
            <br/>
            <div className="centerThis">
              <Button type="submit">SUBMIT</Button>
            </div>
          </Form>
        </div>
        <SearchResults title={this.state.resultsTitle} resultsArray={this.state.resultsArray} loading={this.state.loading} />
      </div>
    );
  }
}
