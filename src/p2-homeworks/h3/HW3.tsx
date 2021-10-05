import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users])
    }

    return (
        <div className={'task'}>
            <hr/>
            homeworks 3

            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
