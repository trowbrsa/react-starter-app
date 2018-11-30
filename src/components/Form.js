import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      textSubmitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {
     // display on page.
   }

  render() {
    return (
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    );
  }
}

export default Form;
