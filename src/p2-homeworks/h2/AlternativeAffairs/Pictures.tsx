import React from "react";
import s from './AlternativeAffairs.module.css';
import {FilterValueType, PictureType} from "./AlternativeAffairs";
import {Picture} from "./Picture";
import {FilterButton} from "./FilterButton";

type PicturesPropsType = {
    data: Array<PictureType>
    delete: (id: number) => void
    filter: (value: FilterValueType) => void
    filterArray: Array<FilterValueType>
}

export const Pictures = (props: PicturesPropsType) => {
    const mappedPictures = props.data.map(d => {
        return (
            <Picture
                key={d.id}
                data={d}
                delete={props.delete}
            />
        )
    })
    const mappedButtons = props.filterArray.map((f, i) => {
        return (
            <FilterButton
                key={i}
                value={f}
                filter={props.filter}
            />
        )
    })

    return (
        <div className={s.commonGrid}>
            <div className={s.picturesGrid}>
                {mappedPictures}
            </div>
            <div className={s.buttons}>
                {mappedButtons}
            </div>
        </div>
    )
}