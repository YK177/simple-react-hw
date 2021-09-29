import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUserOnEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUserOnClick: () => void
    error: string
    totalUsers: string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUserOnEnterPress, addUserOnClick, error, totalUsers} // деструктуризация пропсов
) => {
    const errorClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.container}>
            <div className={s.inpWrapper}>
                <div className={s.inpBody}>
                    <input
                        placeholder={'Enter you name...'}
                        value={name}
                        onChange={setNameCallback}
                        className={`${errorClass} ${s.inp}`}
                        onKeyPress={addUserOnEnterPress}
                    />
                    <span className={s.errorText}>{error}</span>
                </div>
                <button className={s.btn} onClick={addUserOnClick}>Join Us!</button>
            </div>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
