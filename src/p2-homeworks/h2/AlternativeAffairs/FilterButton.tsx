import React from "react";
import s from './AlternativeAffairs.module.css';
import {FilterValueType} from "./AlternativeAffairs";

type FilterButtonPropsType = {
    value: FilterValueType
    filter: (value: FilterValueType) => void
}

export const FilterButton = (props: FilterButtonPropsType) => {
    const changeFilter = () => {
        props.filter(props.value)
    }

    return (
        <button onClick={changeFilter} className={s.btn}>{props.value}</button>
    )
}