import React from 'react'
import s from './HW12.module.css'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../h10/bll/store'
import {changeTheme} from './bll/themeReducer'

const themes = ['dark', 'red', 'some']

function HW12() {

    const dispatch = useDispatch()

    const theme = useSelector<AppStateType, string>(state => state.theme)

    const onOptionChange = (option: string) => {
        dispatch(changeTheme(option))
    }
    console.log(theme)
    return (
        <div className={`task ${s[theme]}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect options={themes} onChangeOption={onOptionChange}/>
            </div>
            <hr/>
        </div>
    )
}

export default HW12
