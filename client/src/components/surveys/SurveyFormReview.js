import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <div>
          <label>{label}</label>
        </div>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  let navigate = useNavigate();
  return (
    <div>
      <h5>Please comfirm your entry</h5>
      {reviewFields}
      <button
        className="btn-flat darken-3 yellow white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="btn-flat teal white-text right"
        onClick={() => submitSurvey(formValues, navigate)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};
export default connect(mapStateToProps, actions)(SurveyFormReview);
