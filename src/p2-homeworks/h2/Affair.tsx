import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    let priorityStyle;
    switch (props.affair.priority) {
        case 'high':
            priorityStyle = s.high;
            break;
        case 'middle':
            priorityStyle = s.middle;
            break;
        case 'low':
            priorityStyle = s.low;
            break;
    }

    return (
        <div className={s.item}>
            <div className={s.title}>{props.affair.name}</div>
            <div className={`${s.priority} ${priorityStyle}`}>{props.affair.priority}</div>
            <SuperButton
                className={s.delete}
                red
                onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}

export default Affair