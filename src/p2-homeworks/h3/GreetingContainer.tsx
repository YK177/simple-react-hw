import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ${name}!`)
        setName('')
    }

    const addUserOnEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const addUserOnClick = () => {
        if (name.trim() === '') {
            setError('Field is required!')
        } else {
            addUser()
        }
    }

    const totalUsers = `${users.length} users already joined us!`

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUserOnEnterPress={addUserOnEnterPress}
            addUserOnClick={addUserOnClick}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
