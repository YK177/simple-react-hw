import React, {useState} from 'react'
import s from './AlternativeAffairs.module.css'
import {Pictures} from "./Pictures";
import {v1} from 'uuid';

export type CategoryType = 'technologies' | 'nature' | 'cars' | 'people'
export type PictureType = {
    id: string
    path: string
    category: CategoryType
}
export type FilterValueType = 'all' | CategoryType

const defaultPictures: Array<PictureType> = [
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
        category: 'technologies'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        category: 'technologies'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
        category: 'technologies'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80',
        category: 'nature'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        category: 'nature'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80',
        category: 'nature'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        category: 'cars'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        category: 'cars'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1618160824640-786f1a5d6895?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80',
        category: 'cars'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        category: 'people'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1437623889155-075d40e2e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        category: 'people'
    },
    {
        id: v1(),
        path: 'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        category: 'people'
    },
]

const shuffleArray = (arr: Array<PictureType>) => {
    return arr.sort(() => Math.random() - 0.5)
}

const shuffledPictures = shuffleArray(defaultPictures);

const filterArray: Array<FilterValueType> = ['all', ...Array.from(new Set(defaultPictures.map(d => d.category)))];

const deletePicture = (pictures: Array<PictureType>, id: string): Array<PictureType> => {
    return pictures.filter(p => p.id !== id)
}

const filterPictures = (pictures: Array<PictureType>, filter: FilterValueType): Array<PictureType> => (
    filter === 'all'
        ? pictures
        : pictures.filter(p => p.category === filter))

function AlternativeAffairs() {
    const [pictures, setPictures] = useState<Array<PictureType>>(shuffledPictures);
    const [filter, setFilter] = useState<FilterValueType>('all')

    const filteredPictures = filterPictures(pictures, filter);

    const deletePictureCallback = (id: string) => {
        setPictures(deletePicture(pictures, id))
    }

    return (
        <div className={s.container}>
            <Pictures
                data={filteredPictures}
                delete={deletePictureCallback}
                filter={filter}
                setFilter={setFilter}
                filterArray={filterArray}
            />
        </div>
    )
}


export default AlternativeAffairs