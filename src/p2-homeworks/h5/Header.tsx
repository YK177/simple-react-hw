import React from 'react'
import Nav from './Nav';
import Logo from './Logo';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Logo/>
                {/*add NavLinks*/}
                <Nav/>
            </div>
        </header>
    )
}

export default Header

