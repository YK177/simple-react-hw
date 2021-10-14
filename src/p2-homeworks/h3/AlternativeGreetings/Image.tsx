import s from './Image.module.css';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import React from 'react';

type PropsType={
    url:string
    category:string
    callback:()=>void
}

export const Image:React.FC<PropsType> = ({url,category,callback}) => {
    return (
        <div className={s.galleryPicture}>
            <img
                src={url}
                alt={category}/>
            <SuperButton onClick={callback} red className={s.delBtn}>x</SuperButton>
        </div>
    )
}