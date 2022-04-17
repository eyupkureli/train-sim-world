import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  trains: [],
};

export const trainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TRAINS:
      return { ...state, trains: payload };
    default:
      return state;
  }
};

export const selectedTrainReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_TRAIN:
      return { ...state, ...payload };
    default:
      // eslint-disable-next-line no-unused-expressions
      return state;
  }
};
