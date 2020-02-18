import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState()
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//
//     let OnPostChange = (text) => {
//         let action = updateNewPostActionCreator(text);
//         props.store.dispatch(action)
//     };
//     return (
//         <MyPosts
//                  updateNewPostText = {OnPostChange}
//                  addPost={addPost}
//                  posts = {state.profilePage.posts}
//                  newPostText ={state.profilePage.newPostText}
//         />
//     )
// };
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action)
        },
        addPost:() => {dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;