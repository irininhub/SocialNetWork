import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
       props.addPost();
    };

    let OnPostChange = (e) => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsblock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                    ref={newPostElement}
                    onChange={OnPostChange}
                    value = {props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;