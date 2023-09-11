import React, { useState } from 'react';
import StartFirebase from "../components/firebaseConfig/index";
import { ref, set, get, update, remove, child, push } from "firebase/database";
import classes from './Form.module.css';

const database = StartFirebase();

export default function NewForm() {
    let [name, setName] = useState('');
    let [sDate, setsDate] = useState('');
    let [eDate, seteDate] = useState('');
    let [description, setDescription] = useState('');
    let [imgPlace, setImgPlace] = useState('');

    let isNullOrWhiteSpace = value => {
        value = value.toString();
        return (value == null || value.replaceAll(' ', '').length < 1);
    }

    let insertData = (e) => {
        e.preventDefault();

        if (
            isNullOrWhiteSpace(description) ||
            isNullOrWhiteSpace(sDate) ||
            isNullOrWhiteSpace(eDate) ||
            isNullOrWhiteSpace(imgPlace)
        ) {
            alert('Fill all the fields!');
            return;
        }

        const postsRef = ref(database, 'places/');
        const newPlaceRef = push(postsRef);

        set(newPlaceRef, {
            name: name,
            description: description,
            startDate: sDate,
            endDate: eDate,
            imagePlace: imgPlace,
        })
            .then(() => {
                alert('Data was added successfully!');
                setName('');
                setDescription('');
                setsDate('');
                seteDate('');
                setImgPlace('');
            })
            .catch((error) => {
                alert('There was an error: ' + error);
            });
    };

    let SelectData = () => {
        const dbref = ref(database);

        get(child(dbref), `places/${name}`).then(snapshot => {
            if (snapshot.exists()) {
                setName(snapshot.val().name);
                setDescription(snapshot.val().description);
                setsDate(snapshot.val().startDate);
                seteDate(snapshot.val().endDate);
                setImgPlace(snapshot.val().imagePlace);
            } else {
                alert('no data available');
            }
        }).catch((error) => {
            console.log(error);
            alert('There was an error: ' + error)
        })
    }

    return (
        <form className={classes.form}>
            <div className={classes.group_actions}>
                <div className={classes.form_control}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Place name...'
                        value={name}
                        onChange={e => { setName(e.target.value) }}
                    />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        id='description'
                        name='description'
                        placeholder="Write something..."
                        value={description}
                        onChange={e => { setDescription(e.target.value) }}
                    ></textarea>
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='sDate'>Start Date:</label>
                    <input
                        type='date'
                        id='sDate'
                        value={sDate}
                        onChange={e => { setsDate(e.target.value) }} />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='eDate'>End Date:</label>
                    <input
                        type='date'
                        id='eDate'
                        value={eDate}
                        onChange={e => { seteDate(e.target.value) }} />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='img'>Select Image:</label>
                    <input
                        type='text'
                        id='img'
                        placeholder='Place image...'
                        accept='image/*'
                        value={imgPlace}
                        onChange={e => { setImgPlace(e.target.value) }} />
                </div>
                <div className={classes.form_btns}>
                    <input className={classes.cancel} type="submit" value='Cancel' />
                    <button id='addBtn' className={classes.add} onClick={insertData}>Add</button>
                </div>
            </div>
        </form>
    )
}