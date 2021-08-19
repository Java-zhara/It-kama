import React from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <div className={style.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

const maxLength5 = maxLengthCreator(5);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        placeholder="Post message"
        name="newPostText"
        validate={[required, maxLength5]}
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const AddNewPostFormRedux = reduxForm({
  form: "profileAddNewPostFormRedux",
})(AddNewPostForm);

export default MyPosts;
