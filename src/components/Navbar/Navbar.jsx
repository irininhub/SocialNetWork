import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}> 
    <div  className ={s.item}>    
      <NavLink to = "/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    {/* Ниже мы используем 2 класса для css. Если бы класс использзовался 
    глобально для всего дока, было бы classMame = "item active"  {'${s.item} ${s.active}'}*/}
    <div className ={s.item}>>
      <NavLink to = "/dialogs" activeClassName={s.active}>Massenges</NavLink>
    </div>
    <div className ={s.item}>>
    <NavLink to = "/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className ={s.item}>>
      <NavLink to = "/music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className ={s.item}>>
      <NavLink to = "/settings" activeClassName={s.active}>Settings</NavLink>
    </div>
    </nav>
}


export default Navbar;