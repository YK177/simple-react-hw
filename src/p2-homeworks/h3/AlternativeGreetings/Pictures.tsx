import React, {ChangeEvent, useState} from 'react';
import s from './AlternativeComponent.module.css';
import {FilterValueType, PictureType} from './AlternativeComponent';
import {Picture} from './Picture';
import {Button} from './Button';
import {v1} from 'uuid';

type PicturesPropsType = {
    data: PictureType[]
    deletePicture: (id: string) => void
    setFilter: (value: FilterValueType) => void
    categories: FilterValueType[]
    addPictureCallback: (newPath: string, newCategory: string) => void
}

export const Pictures: React.FC<PicturesPropsType> = ({
                                                          data,
                                                          deletePicture,
                                                          setFilter,
                                                          categories,
                                                          addPictureCallback
                                                      }) => {
    const [newPath, setNewPath] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [error, setError] = useState<string>('')

    const onChangeHandlerForPath = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPath(e.currentTarget.value)
        setError('')
    }

    const onChangeHandlerForCategory = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.currentTarget.value)
        setError('')
    }


    const deletePictureCallBack = (dId: string) => {
        deletePicture(dId)
    }

    const callBackHandlerForFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const callBackHandlerForAddPicture = () => {
        if (!newPath.trim() || !newCategory.trim()) {
            setError('Field is required!')
        } else {
            addPictureCallback(newPath, newCategory);
            setNewPath('')
            setNewCategory('')
        }
    }

    const mappedPictures = data.map(d => {
        return (
            <Picture
                key={d.id}
                data={d}
                deletePicture={() => deletePictureCallBack(d.id)}
            />
        )
    })

    const mappedButtons = categories.map((c) => {
        return (
            <Button
                key={v1()}
                name={c}
                callBack={() => callBackHandlerForFilter(c)}
            />
        )
    })

    const errorClass = error ? s.error : ''

    return (


        <div className={s.commonGrid}>
            <div>
                <div>
                    <input
                        placeholder={'Paste picture\'s URL'}
                        className={`${s.inp} ${errorClass}`}
                        type="text"
                        value={newPath}
                        onChange={onChangeHandlerForPath}
                    />
                    <span className={s.errorText}>{error}</span>
                    <input
                        placeholder={'Type picture\'s category (e.g. people, nature etc...)'}
                        className={`${s.inp} ${errorClass}`}
                        type="text" value={newCategory}
                        onChange={onChangeHandlerForCategory}
                    />
                    <span className={s.errorText}>{error}</span>
                </div>
                <div className={s.picturesGrid}>
                    {mappedPictures}
                </div>
            </div>
            <div className={s.buttons}>
                <Button name={'add picture'} callBack={callBackHandlerForAddPicture}/>
                {mappedButtons}
            </div>
        </div>
    )
}