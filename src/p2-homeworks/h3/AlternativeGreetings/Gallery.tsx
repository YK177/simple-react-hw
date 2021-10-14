import s from './Gallery.module.css';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import React from 'react';
import {ImageType} from './AlternativeComponent';
import {Image} from './Image';
import {v1} from 'uuid';

type PropsType = {
    gallery: ImageType[]
    removeImage: (iID: string) => void
    changeFilter: (filter: string) => void
    filters: string[]
    filter: string
}

export const Gallery: React.FC<PropsType> = ({gallery, removeImage, changeFilter, filters, filter}) => {

    const images = gallery.map(i => {
        const removeImageCallback = () => removeImage(i.id)
        return (
            <Image
                key={i.id}
                url={i.url}
                category={i.category}
                callback={removeImageCallback}/>
        )
    })

    const filterButtons = filters.map(f => {
        const changeFilterCallback = () => {
            changeFilter(f)
        }
        return (
            <SuperButton
                key={v1()}
                className={s.filterButton}
                red={filter === f}
                onClick={changeFilterCallback}
            >
                {f}
            </SuperButton>
        )
    })

    const clickHandlerForAllButton = () => changeFilter('all')

    return (
        <div className={s.galleryWrapper}>
            <div className={s.galleryGrid}>
                {images}
            </div>
            <div className={s.galleryFilters}>
                {gallery.length > 0 &&
                <SuperButton red={filter==='all'} onClick={clickHandlerForAllButton} className={s.filterButton}>All</SuperButton>}
                {filterButtons}
            </div>
        </div>
    )
}

