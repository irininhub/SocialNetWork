import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
       return <Preloader/>
    }
    return <div className={s.content}>
        <div>
            <img src="http://www.ejin.ru/wp-content/uploads/2017/09/10-611.jpg"/>
        </div>

        <div className={s.block}>
            <img src={props.profile.photos.large} className={s.avatar}/>
           <div>{props.profile.aboutMe}</div>
        </div>
    </div>


}


export default ProfileInfo;