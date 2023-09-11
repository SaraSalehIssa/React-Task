import React from 'react';
import classes from './Form.module.css';

export default function NewForm() {

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
                    <input className={classes.cancel} type="submit" value='Cancel' />
                    <button className={classes.add}>Add</button>
                </div>
            </div>
        </form>
    )
}
