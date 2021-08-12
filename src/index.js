
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)


