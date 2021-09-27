import React from "react";
import s from './AlternativeAffairs.module.css';
import {PictureType} from "./AlternativeAffairs";

type PicturePropsType = {
    data: PictureType
    delete: (id: number) => void
}

export const Picture = (props: PicturePropsType) => {
    const deletePicture = () => {
        props.delete(props.data.id);
    }

    return (
        <div className={s.picture} data-category={props.data.category}>
            <img src={props.data.path} alt=""/>
            <button onClick={deletePicture} className={s.delete}><span>X</span></button>
        </div>
    )
}