import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.jpg";
import ProfileStatus from "./ProofileStatus";

import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.content}>
      {/* <div>
        <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"></img>
      </div> */}
      <div className={style.diskBlock}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
        />
        <ProfileStatus status={"HELLO"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
