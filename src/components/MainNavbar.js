import { NavLink } from 'react-router-dom';

import classes from './MainNavbar.module.css';

function MainNavbar() {
    return <>
        <nav className={classes.navbar}>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? classes.active : undefined} end >
                        List
                    </NavLink>
                </li>
                <li className='form-item'>
                    <NavLink
                        to='/newform'
                        className={({ isActive }) => isActive ? classes.active : undefined} >
                        Form
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default MainNavbar;