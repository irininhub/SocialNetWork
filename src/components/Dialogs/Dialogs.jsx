import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItems/DialogsItems";
import Message from "./Messages/Messages";


const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    };

    let onSendMessageClick = () => {
        props.sendMessage()
    }


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>
                {messagesElements}
            </div>
            <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'>
                    </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>send</button>
            </div>

        </div>
    </div>
}

export default Dialogs;