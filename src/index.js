import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


