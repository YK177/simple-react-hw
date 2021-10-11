import React from 'react';
import s from './AlternativeComponent.module.css';
import {PictureType} from './AlternativeComponent';
import {Button} from './Button';

type PicturePropsType = {
    data: PictureType
    deletePicture: () => void
}

export const Picture: React.FC<PicturePropsType> = ({data, deletePicture}) => {
    const callBackHandlerForDeletePicture = () => {
        deletePicture();
    }

    return (
        <div className={s.picture} data-category={data.category}>
            <img src={data.path} alt=""/>
            <div className={s.deleteBtn}>
                <Button name={'X'} callBack={callBackHandlerForDeletePicture}/>
            </div>
        </div>
    )
}