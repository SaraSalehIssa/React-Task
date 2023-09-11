import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Form.module.css';

export default function Form() {
    const location = useLocation();

    let isNewEvent = true;
    let btn1 = 'Cancel'
    let btn2 = 'Add';

    switch (location.pathname) {
        case '/newform':
            isNewEvent = true;
            btn1 = 'Cancel'
            btn2 = 'Add';
            break;
        case '/e2':
            isNewEvent = false;
            btn1 = 'Delete'
            btn2 = 'Save';
            break;
        default:
            break;
    }

    return (
        <form className={classes.form}>
            <div className={classes.group_actions}>
                <div className={classes.form_control}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' placeholder='Place name...' />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' name='description' placeholder="Write something..."></textarea>
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='sDate'>Start Date:</label>
                    <input type='date' id='sDate' />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='eDate'>End Date:</label>
                    <input type='date' id='eDate' />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='img'>Select Image:</label>
                    <input type='text' id='img' placeholder='Place image...' accept='image/*' />
                </div>
                <div className={classes.form_btns}>
                    {isNewEvent && <input className={classes.cancel} type="submit" value={btn1} />}
                    {isNewEvent && <button className={classes.add}>{btn2}</button>}
                    {!isNewEvent && <input className={classes.remove} type="submit" value={btn1} />}
                    {!isNewEvent && <button className={classes.save}>{btn2}</button>}
                </div>
            </div>
        </form>
    )
}
