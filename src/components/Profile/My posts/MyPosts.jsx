import React from "react";
import Post from "./Post/Post";

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

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              cols="30"
              rows="1"
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
