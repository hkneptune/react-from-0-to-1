import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

import Modal from 'react-modal';
var appElement = document.getElementById('example');

Modal.setAppElement(appElement);

ReactDOM.render(
  <App />,
  appElement
);
