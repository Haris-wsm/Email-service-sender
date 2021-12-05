import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

import SurveyNew from './components/surveys/SurveyNew';

// redux stuff

import { connect } from 'react-redux';
import * as actions from './actions';
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/surveys" element={<Dashboard />} />
            <Route exact path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
