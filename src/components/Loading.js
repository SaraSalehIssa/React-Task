import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import classes from './Loading.module.css';

const YourComponent = () => {
    return (
        <div className={classes.loadinImg}>
            <FontAwesomeIcon
                className={classes.spinner}
                icon={faSpinner}
            />
        </div>
    );
};

export default YourComponent;
