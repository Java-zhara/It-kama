import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols="10" rows="1"></textarea>
                    <button>Add post</button>            
                </div>
            </div>
            <Post message='Hello' like='15'/>
            <Post message='First post' like='20'/>
        </div>
    );
}

export default MyPosts;