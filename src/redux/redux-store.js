import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reduсer";
import { profileReducer } from "./profile-reduсer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer, 
  sidebar: sidebarReducer,
  usersPage: usersReducer
})

let store = createStore(reducers);

export default store;