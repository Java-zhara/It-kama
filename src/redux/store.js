import { dialogsReducer } from "./dialogs-reduser";
import { profileReducer } from "./profile-reduser";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hello", likesCount: "15" },
        { id: "2", message: "First post", likesCount: "20" },
      ],
      newPostText: "Žyvie",
    },

    dialogsPage: {
      dialogs: [
        { id: "1", name: "Java" },
        { id: "2", name: "Zhara" },
        { id: "3", name: "Shut" },
      ],

      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello" },
      ],
      newMessageBody: "",
    },

    sidebar: {},
  },
  _callSubscriber() {}, // rerenderEntireTree

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state); // rerenderEntireTree
  },
};

export default store;
window.store = store;
