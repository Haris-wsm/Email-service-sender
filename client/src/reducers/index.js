import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

const reducers = combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
export default reducers;
