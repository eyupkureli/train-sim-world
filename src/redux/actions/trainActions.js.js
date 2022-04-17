import { ActionTypes } from "../constants/actionTypes";

export const setTrains = (trains) => {
   return {
      type: ActionTypes.SET_TRAINS,
      payload: trains,
   }
}

export const selectedTrain = (train) => {
   return {
      type: ActionTypes.SELECTED_TRAIN,
      payload: train,
   };
};

