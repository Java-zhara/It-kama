import React from 'react';
import MyPosts from './My posts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'></img>
            </div>
            <div>
                ava + disk
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;