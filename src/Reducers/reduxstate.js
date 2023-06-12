import { combineReducers, legacy_createStore } from "redux";
import ProjectsReducer from './ProjectsReducer/ProjectsReducer.js';

let reducers = combineReducers({
    ProjectsReducer
})
let reduxstate = legacy_createStore(reducers);

export default reduxstate;