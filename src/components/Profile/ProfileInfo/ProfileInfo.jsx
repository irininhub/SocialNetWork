import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img src="http://www.ejin.ru/wp-content/uploads/2017/09/10-611.jpg"/>
        </div>

        <div className={s.block}>
            ava + description
        </div>

    </div>


}


export default ProfileInfo;