import { actionTypes } from './action';

let initialState = {
  counting: false,
  number: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK_SUCCESS:
      return { ...state, number: state.number + 1 };
    case actionTypes.START_SUCCESS:
      return { ...state, counting: true };
    case actionTypes.STOP_SUCCSSES:
      return { ...state, counting: false, number: 0 };
    default:
      return state;
  }
};
