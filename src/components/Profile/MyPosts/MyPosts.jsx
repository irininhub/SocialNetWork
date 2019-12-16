import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={s.postsblock}>

                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>


            <div className={s.posts}>
                <Post message='Hi, everybody' like='10'/>
                <Post message='Who use this site?' like='15'/>
            </div>


        </div>
    )
}


export default MyPosts;