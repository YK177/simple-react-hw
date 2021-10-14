import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUserOnEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUserOnClick: () => void
    error: string
    totalUsers: string
}

const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUserOnEnterPress,
                                                   addUserOnClick,
                                                   error,
                                                   totalUsers
                                               }) => {


    return (
        <div className={s.container}>
            <div className={s.inpWrapper}>
                <div className={s.inpBody}>
                    <SuperInputText
                        placeholder={'Enter your name...'}
                        value={name}
                        onChange={setNameCallback}
                        onKeyPress={addUserOnEnterPress}
                        error={error}
                    />
                </div>

                <SuperButton className={s.btn} onClick={addUserOnClick}>Join Us!</SuperButton>
            </div>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting