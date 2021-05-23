import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="1"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;