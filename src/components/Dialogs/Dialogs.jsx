import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
                <DialogsItem name="Dimych" id="1"/>
                <DialogsItem name="Andrey" id="2"/>
                <DialogsItem name="Marat" id="3"/>
                <DialogsItem name="Irina" id="4"/>
                <DialogsItem name="Victoria" id="5"/>

        </div>

            <div className={s.messages}>
                <Message message = "Hi!"/>
                <Message message = "Were you&"/>
                <Message message = "What's up!!"/>
            </div>
        </div>
        }

        export default Dialogs;