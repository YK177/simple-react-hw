import s from './AlternativeComponent.module.css';
import React from 'react';
import {GalleryInputFields} from './GalleryInputFields';
import {Gallery} from './Gallery';
import {ImageType} from './AlternativeComponent';

type PropsType = {
    gallery: ImageType[]
    removeImage: (iID: string) => void
    addImage: (newUrl: string, newCategory: string) => void
    changeFilter: (filter: string) => void
    filters: string[]
    filter:string
}

export const GalleryContainer: React.FC<PropsType> = ({gallery, removeImage, changeFilter, filters, addImage,filter}) => {
    return (
        <>
            <GalleryInputFields addImage={addImage}/>
            <Gallery
                gallery={gallery}
                removeImage={removeImage}
                changeFilter={changeFilter}
                filters={filters}
                filter={filter}
            />
        </>
    )
}

