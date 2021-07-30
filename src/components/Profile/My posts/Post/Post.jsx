import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like:</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
