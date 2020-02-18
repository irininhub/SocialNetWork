import React from 'react'
import s from "./Users.module.css";
import photo from '../../assets/images/204-2040760_contact-starwars-user-default-yoda-comments-users-icon.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../api/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return  <div className={s.users}>
        <div>
            {pages.map((p, i) => {
                return <span className={props.currentPage === p && s.selectedPage}
                             key = {i}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p} </span>

            })}
        </div>
        {props.users.map(u => <div key={u.id} className={s.user}>
            <div>
                <NavLink to='/profile'>
                    <img src={u.photos.small != null ? u.photos.small : photo} className={s.userPhoto}/>
                </NavLink>
                <div>{u.name}</div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            usersAPI.deleteUser(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    this.props.unfollow(u.id)
                                }
                            })
                        }}>unfollow</button>

                        : <button onClick={() => {
                            usersAPI.postUser(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                            })

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