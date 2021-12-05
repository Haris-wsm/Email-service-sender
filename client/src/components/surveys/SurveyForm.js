// SurveyForm  show a form for a user to add input
import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

import validaEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ name, type, label }) => (
      <Field
        key={name}
        name={name}
        label={label}
        type={type}
        component={SurveyField}
      />
    ));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>

          <button className="teal btn-flat right white-text" type="submit">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const erorrs = {};

  //   if (!values.title) {
  //     erorrs.title = 'You must provide a title';
  //   }

  erorrs.recipients = validaEmails(values.recipients || '');

  _.map(FIELDS, ({ name }) => {
    if (!values[name]) {
      erorrs[name] = `You must provide a ${name}`;
    }
  });

  return erorrs;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
