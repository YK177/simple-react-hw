import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import React from 'react';
import s from './Nav.module.css';

export function Nav() {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__item}>
                    <NavLink to={PATH.PRE_JUNIOR}
                             className={s.nav__link}
                             activeClassName={s.nav__link_active}>
                        PreJunior
                    </NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to={PATH.JUNIOR}
                             className={s.nav__link}
                             activeClassName={s.nav__link_active}>
                        Junior
                    </NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to={PATH.JUNIOR_PLUS}
                             className={s.nav__link}
                             activeClassName={s.nav__link_active}>
                        JuniorPlus
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav