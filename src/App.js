import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInputs from './FormInputs';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormInputs />
      </div>
    );
  }
}

export default App;
