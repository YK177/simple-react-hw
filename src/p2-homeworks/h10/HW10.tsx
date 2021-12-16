import React from 'react'
import s from './HW10.module.css'
import spinner from './assets/img/spinner.svg'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'

function HW10() {

    const loading = useSelector<AppStateType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className={'task'}>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div className={s.container}>
                        <img src={spinner} alt="loading"/>
                    </div>
                ) : (
                    <div className={s.container}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
