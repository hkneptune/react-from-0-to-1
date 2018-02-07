import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption,typeNumber) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption,
    typeNumber:typeNumber
  });
};

export const decrement = (counterCaption,typeNumber) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption,
    typeNumber:typeNumber
  });
};
