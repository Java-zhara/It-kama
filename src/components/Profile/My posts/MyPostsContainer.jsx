import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreators,
  updateNewPostTextActionCreators,
} from "../../../redux/profile-reduсer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreators());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreators(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
