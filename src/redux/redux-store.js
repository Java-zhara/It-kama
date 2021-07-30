import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reduser";
import { profileReducer } from "./profile-reduser";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer, 
  sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;