import { addPostActionCreators, deletePost, profileReducer } from "./profile-reduсer";

let state = {
  posts:[
    { id: '1', message: 'First post', likesCount: '15' },
    { id: '2', message: 'Second post', likesCount: '20' },
  ],
}

test('length of posts should be incremented', () => {
  let action = addPostActionCreators('Hello Java');
  
  let newState = profileReducer(state, action);

  expect (newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  let action = addPostActionCreators('Hello Java');
  
  let newState = profileReducer(state, action);

  expect (newState.posts[2].message).toBe('Hello Java');
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);
  
  let newState = profileReducer(state, action);

  expect (newState.posts.length).toBe(2);
});

