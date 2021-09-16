import React from 'react'
import s from './AlternativeMessage.module.css'

type PropsType = {
    data: AltDataType
}

export type AltDataType = {
    avatar: string
    name: string
    lastSeen: number
    comment: string
    likeCount: number
    shareCount: number
}

function AlternativeMessage(props: PropsType) {
    return (
        <div className={s.alt_message}>
            <div className={s.container}>
                <div className={s.top}>
                    <div className={s.avatar}>
                        <img src={props.data.avatar} alt="avatar"/>
                    </div>
                    <div className={s.info}>
                        <h4>{props.data.name}</h4>
                        <p>{props.data.lastSeen} min ago</p>

                    </div>
                </div>
                <div className={s.body}>
                    <p className={s.comment}>
                        {props.data.comment}
                    </p>
                    <div className={s.testimonials}>
                        <div className={s.item}>
                            <button>Like</button>
                            <p>{props.data.likeCount} people liked this</p>
                        </div>
                        <div className={s.item}>
                            <button>Share</button>
                            <p>{props.data.shareCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
