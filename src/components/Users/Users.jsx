import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/avatar.jpg";

import style from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <div key={page.id} className={style.page}>
              <span
                className={props.currentPage === page && style.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(page);
                }}
              >
                {page}
              </span>
            </div>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="userPhoto"
                  className={style.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);

                    // usersAPI.unfollow(user.id).then((response) => {
                    //   if (response.data.resultCode === 0) {
                    //     props.unfollow(user.id);
                    //   }
                    //   props.toggleFollowingProgress(false, user.id);
                    // });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);

                    //   usersAPI.follow(user.id).then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(user.id);
                    //     }
                    //     props.toggleFollowingProgress(false, user.id);
                    //   });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
