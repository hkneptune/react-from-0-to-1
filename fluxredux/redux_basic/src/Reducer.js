import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

  console.log(action);
  console.log(state);

  switch (action.type) {
    case ActionTypes.INCREMENT:
      console.log(counterCaption);
      console.log([counterCaption]);
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
