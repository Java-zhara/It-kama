import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reduсer";
import { profileReducer } from "./profile-reduсer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer, 
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
