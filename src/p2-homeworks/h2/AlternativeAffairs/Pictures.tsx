import React from 'react';
import s from './AlternativeAffairs.module.css';
import {FilterValueType, PictureType} from './AlternativeAffairs';
import {Picture} from './Picture';
import {FilterButton} from './FilterButton';
import {v1} from 'uuid';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';

type PicturesPropsType = {
    data: Array<PictureType>
    deletePicture: (id: string) => void
    filter: FilterValueType
    setFilter: (value: FilterValueType) => void
    filterArray: Array<FilterValueType>
}

export const Pictures = (props: PicturesPropsType) => {
    const mappedPictures = props.data.map(d => {
        const deletePictureCallback = () => {
            props.deletePicture(d.id)
        }
        return (
            <Picture
                key={d.id}
                data={d}
                callback={deletePictureCallback}
            />
        )
    })
    const mappedButtons = props.filterArray.map((f) => {
        const changeFilterCallback = () => {
            props.setFilter(f)
        }
        return (
            <SuperButton
                key={v1()}
                className={s.btn}
                onClick={changeFilterCallback}
                value={f}
                red={props.filter === f}
            >
                {f}
            </SuperButton>
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