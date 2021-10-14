import s from './GalleryInputFields.module.css';
import SuperInputText from '../../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addImage: (newUrl: string, newCategory: string) => void
}

export const GalleryInputFields: React.FC<PropsType> = ({addImage}) => {
    const [newUrl, setNewUrl] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [errorUrl, setErrorUrl] = useState('')
    const [errorCat, setErrorCat] = useState('')

    const onChangeHandlerForURL = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUrl(e.currentTarget.value)
        setErrorUrl('')
    }
    const onChangeHandlerForCategory = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.currentTarget.value)
        setErrorCat('')
    }
    const addImageCallback = () => {
        if (!newUrl.trim()) {
            setErrorUrl('This field is required!')
        } else if (!newCategory.trim()) {
            setErrorCat('This field is required!')
        } else {
            addImage(newUrl.trim(), newCategory.trim().toLowerCase())
            setNewUrl('')
            setNewCategory('')
        }
    }

    return (
        <div className={s.controls}>
            <div className={s.inputFields}>
                <div className={s.inp}>
                    <SuperInputText
                    error={errorUrl}
                    onChange={onChangeHandlerForURL}
                    value={newUrl}
                    placeholder={'Paste picture\'s URL...'}
                    onEnter={addImageCallback}
                />
                </div>
                <div className={s.inp}>
                    <SuperInputText
                    error={errorCat}
                    onChange={onChangeHandlerForCategory}
                    value={newCategory}
                    placeholder={'Type picture\'s category (e.g. \'people\', \'nuture\' etc.)'}
                    onEnter={addImageCallback}
                />
                </div>
            </div>
            <SuperButton onClick={addImageCallback} className={s.addPictureBtn}>Add picture</SuperButton>
        </div>
    )
}