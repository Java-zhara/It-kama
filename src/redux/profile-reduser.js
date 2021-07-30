const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts:[
    { id: '1', message: 'Hello', likesCount: '15' },
    { id: '2', message: 'First post', likesCount: '20' },
  ],
  newPostText: 'Žyvie'
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: '3',
        message: state.newPostText,
        likesCount: '55'
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default: return state;
  }
}

export const addPostActionCreators = () => ({type: ADD_POST})
export const updateNewPostTextActionCreators = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
