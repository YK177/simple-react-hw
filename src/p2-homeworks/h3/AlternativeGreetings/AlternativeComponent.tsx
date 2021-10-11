import React, {useState} from 'react'
import s from './AlternativeComponent.module.css'
import {Pictures} from './Pictures';
import {v1} from 'uuid';

export type CategoryType = string
export type PictureType = {
    id: string
    path: string
    category: CategoryType
}
export type FilterValueType = 'all' | CategoryType

const defaultPictures: PictureType[] = []

const defaultCategories: FilterValueType[] = ['all']

const deletePicture = (pictures: PictureType[], id: string): PictureType[] => {
    return pictures.filter(p => p.id !== id)
}

const filterPictures = (pictures: PictureType[], filter: FilterValueType): PictureType[] => (
    filter === 'all'
        ? pictures
        : pictures.filter(p => p.category === filter))

export const AlternativeComponent = () => {
    const [pictures, setPictures] = useState<PictureType[]>(defaultPictures);
    const [filter, setFilter] = useState<FilterValueType>('all')
    const [categories, setCategories] = useState<CategoryType[]>(defaultCategories)

    const filteredPictures = filterPictures(pictures, filter);

    const removeCategory = (id: string) => {
        let foundCategory: CategoryType
        pictures.forEach(p => {
            if (p.id === id) {
                foundCategory = (p.category)
            }
        })
        let categoryCounter = pictures.reduce((accum: number, c: PictureType) => {
            if (c.category === foundCategory) {
                accum++
            }
            return accum
        }, 0)
        if (categoryCounter === 1) {
            setCategories(categories.filter(c => c !== foundCategory))
        }
    }

    const deletePictureCallback = (id: string) => {
        setPictures(deletePicture(pictures, id))
        removeCategory(id)
    }

    const addCategories = (pictures: PictureType[], newCategory: string) => {
        if (!pictures.find(p => p.category === newCategory)) {
            setCategories([...categories, newCategory])
        }
    }

    const addPictureCallback = (newPath: string, newCategory: string) => {
        setPictures([{id: v1(), path: newPath, category: newCategory}, ...pictures])
        addCategories(pictures, newCategory)
    }


    return (
        <div className={s.container}>
            <Pictures
                data={filteredPictures}
                deletePicture={deletePictureCallback}
                setFilter={setFilter}
                categories={categories}
                addPictureCallback={addPictureCallback}
            />
        </div>
    )
}