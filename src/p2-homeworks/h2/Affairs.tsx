import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (arg: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () => {
        props.setFilter('all');
    } // need to fix
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div className={s.container}>
            <div className={s.affairsBlock}>
                {mappedAffairs}
            </div>
            <div className={s.buttonsBlock}>
                <button className={`${s.all} ${s.btn}`} onClick={setAll}>All</button>
                <button className={`${s.high} ${s.btn}`} onClick={setHigh}>High</button>
                <button className={`${s.middle} ${s.btn}`} onClick={setMiddle}>Middle</button>
                <button className={`${s.low} ${s.btn}`} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
