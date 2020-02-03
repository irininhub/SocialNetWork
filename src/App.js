import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
{/*//store={props.store}*/}
            <Route path='/profile' render={() => <Profile />}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/dialogs' render={() => <UsersContainer/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            {/*<Route path='/friends' render ={()=> Friends}/>*/}
        </div>


    </div>

}

export default App;
