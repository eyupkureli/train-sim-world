import { combineReducers } from "redux";
import { trainReducer, selectedTrainReducer } from "./trainReducer";

const reducers = combineReducers({
   allTrains: trainReducer,
   train: selectedTrainReducer,
});

export default reducers;