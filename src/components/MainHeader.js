import { useLocation } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
    const location = useLocation();
    let showButton = true;

    let headerTitle = 'Events';

    switch (location.pathname) {
        case '/':
            headerTitle = 'Events';
            break;
        case '/newform':
            headerTitle = 'Create Event';
            showButton = false;
            break;
        case '/e2':
            headerTitle = 'Edit Event';
            showButton = false;
            break;
        default:
            break;
    }

    return <header className={classes.header}>
        <div className={classes.row}>
            <h1 className={classes.firstTitle}>{headerTitle}</h1>
            {showButton && <button className={classes.newButton} onClick={function GoToCreateEventPage() {
                window.location = '/newform';
            }} type='button'>+New</button>}
        </div>
    </header>
}

export default MainHeader;