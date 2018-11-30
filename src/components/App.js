import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const app = {
  initialize() {
    ReactDOM.render(<Form />, document.getElementById('root'));
  }
};

app.initialize();
