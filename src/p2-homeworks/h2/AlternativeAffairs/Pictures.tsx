import React from 'react';
import s from './AlternativeAffairs.module.css';
import {FilterValueType, PictureType} from './AlternativeAffairs';
import {Picture} from './Picture';
import {FilterButton} from './FilterButton';
import {v1} from 'uuid';

type PicturesPropsType = {
    data: Array<PictureType>
    delete: (id: string) => void
    filter: FilterValueType
    setFilter: (value: FilterValueType) => void
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
    const mappedButtons = props.filterArray.map((f) => {
        return (
            <FilterButton
                key={v1()}
                value={f}
                filter={props.filter}
                setFilter={props.setFilter}
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