import axios from 'axios';
import { FETCH_USER, FETCH_SUERVEYS, DELETE_SUERVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, navigate) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  navigate('/surveys');
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  return dispatch({ type: FETCH_SUERVEYS, payload: res.data });
};

export const sortSurveys = (query) => async (dispatch) => {
  const res = await axios.get(`/api/surveys?sort=${query}`);
  return dispatch({ type: FETCH_SUERVEYS, payload: res.data });
};

export const deleteSurvey = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/surveys/${id}`);

  return dispatch({ type: DELETE_SUERVEYS, payload: res.data });
};
