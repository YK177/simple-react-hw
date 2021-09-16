import React from 'react'
import s from './Message.module.css'

export type MessageProsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProsType) {
    return (
        <div className={s.message}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={s.body}>
                    <div className={s.text}>
                        <h4>{props.name}</h4>
                        <p>{props.message}</p>
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
