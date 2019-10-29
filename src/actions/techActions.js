import {
  GET_TECHS,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING
} from './types';

export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('./techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

export const addTech = tech => async dispatch => {
  try {
    setLoading();
    console.log('just before sending...');
    const res = await fetch('./techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    console.log(data);

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
