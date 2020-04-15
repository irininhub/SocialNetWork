import React from 'react'
import s from "./Users.module.css";
import photo from '../../assets/images/204-2040760_contact-starwars-user-default-yoda-comments-users-icon.png'
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";



const Users = ({currentPage,totalUsersCount,pageSize,onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.users}>
        <Paginator currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
        {props.users.map(u => <div key={u.id} className={s.user}>
            <div>
                <NavLink to='/profile'>
                    <img src={u.photos.small != null ? u.photos.small : photo} className={s.userPhoto}/>
                </NavLink>
                <div>{u.name}</div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>follow</button>
                    }
                </div>
            </div>
            <div>{u.status}</div>
            <div>
                <div>"u.location.country"</div>
                <div>"u.location.city"</div>
            </div>
        </div>)}

    </div>
}


export default Users;