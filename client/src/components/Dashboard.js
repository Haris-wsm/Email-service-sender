import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import SurveyList from './surveys/SurvetList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};
export default reduxForm({
  form: 'surveyForm'
})(Dashboard);
