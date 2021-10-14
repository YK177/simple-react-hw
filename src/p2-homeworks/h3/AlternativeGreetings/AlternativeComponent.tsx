import React, {useState} from 'react'
import {GalleryContainer} from './GalleryContainer';
import s from './AlternativeComponent.module.css'
import {v1} from 'uuid';
import {FilterValueType, PictureType} from '../../h2/AlternativeAffairs/AlternativeAffairs';

export type ImageType = {
    id: string
    url: string
    category: string
}

const filterImages = (images: ImageType[], category: string): ImageType[] => (
    category === 'all'
        ? images
        : images.filter(i => i.category === category))


export const AlternativeComponent = () => {
    const [gallery, setGallery] = useState<ImageType[]>([])
    const [filter, setFilter] = useState('all')
    const filterArray = Array.from(new Set(gallery.map(g => g.category))).sort()
    const filteredImages = filterImages(gallery, filter)

    const removeImage = (iID: string) => {
        setGallery(gallery.filter(i => i.id !== iID))
    }
    const addImage = (newUrl: string, newCategory: string) => {
        setGallery([{id: v1(), url: newUrl, category: newCategory}, ...gallery])
    }

    return (
        <>
            <h2 className={s.title}>Interactive gallery</h2>
            <GalleryContainer
                gallery={filteredImages}
                removeImage={removeImage}
                addImage={addImage}
                changeFilter={setFilter}
                filters={filterArray}
                filter={filter}
            />
        </>

    )
}

