import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";


const RootReducer = (combineReducers({
    auth: authReducer,
    project: projectReducer
}))

export default RootReducer;