import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        if (name.trim() === '') {
            setError('Field is required!')
        } else {
            addUserCallback(name.trim())
            alert(`Hello  ${name.trim()}!`)
            setName('')
        }
    }

    const addUserOnEnterPress = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && addUser()

    const addUserOnClick = () => addUser()

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