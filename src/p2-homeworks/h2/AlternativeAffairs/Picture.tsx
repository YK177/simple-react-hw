import React from "react";
import s from './AlternativeAffairs.module.css';
import {PictureType} from "./AlternativeAffairs";
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';

type PicturePropsType = {
    data: PictureType
    callback: () => void
}

export const Picture = (props: PicturePropsType) => {
    const deletePicture = () => {
       props.callback()
    }

    return (
        <div className={s.picture} data-category={props.data.category}>
            <img src={props.data.path} alt={props.data.category}/>
            <SuperButton
                red
                onClick={deletePicture}
                className={s.delete}
            >
                x
            </SuperButton>
        </div>
    )
}