import React, {ChangeEvent, useState} from 'react'
import s from './Request.module.css'
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'
import {sendRequest} from '../api/request-api'

export const Request = () => {
    const [errorText, setErrorText] = useState<string>('')
    const [infoText, setInfoText] = useState<string>('')
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [textColor, setTextColor] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.currentTarget.checked)
    }

    const handleClick = () => {
        sendRequest(isChecked)
            .then(response => {
                setErrorText(response.data.errorText)
                setInfoText(response.data.info)
                setTextColor('green')
            })
            .catch(error => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                setErrorText(error.response.data.errorText)
                setInfoText(error.response.data.info)
                setTextColor('red')
            })
    }

    return (
        <div className={s.container}>
            <div className={s.response}>
                <p className={`${s.item} ${s[textColor]}`}>{errorText}</p>
                <p className={`${s.item} ${s[textColor]}`}>{infoText}</p>
            </div>
            <div className={s.body}>
                <div className={s.checkbox}>
                    <SuperCheckbox checked={isChecked} onChange={handleChange}/>
                </div>
                <div className={s.button}>
                    <SuperButton onClick={handleClick}>send</SuperButton>
                </div>
            </div>
        </div>
    )
}