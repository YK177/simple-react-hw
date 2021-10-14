import React from 'react'
import {HashRouter} from 'react-router-dom'
import s from './HW5.module.css'
import Header from './Header'
import Routes from './Routes'

function HW5() {
    return (
        <div className={s.wrapper}>
            {/*в gh-pages лучше работает HashRouter*/}
            {/* eslint-disable-next-line react/jsx-no-undef*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
