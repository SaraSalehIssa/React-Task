import React, { useState, useEffect } from 'react';
import StartFirebase from "../firebaseConfig/index";
import { useLocation } from 'react-router-dom';
import { ref, onValue, remove, update } from 'firebase/database';
import classes from './Form.module.css';

const database = StartFirebase();

export default function EditForm() {
    const [name, setName] = useState('');
    const [sDate, setsDate] = useState('');
    const [eDate, seteDate] = useState('');
    const [description, setDescription] = useState('');
    const [imgPlace, setImgPlace] = useState('');
    
    const [isChange, setIsChange] = useState(false);

    const location = useLocation();
    let pathname = location.pathname;
    pathname = pathname.substring(6);
    const placeRef = ref(database, `places/${pathname}`);

    useEffect(() => {
        onValue(placeRef, (snapshot) => {
            const placeData = snapshot.val();
            if (placeData && !isChange) {
                setName(placeData.name || '');
                setsDate(placeData.startDate || '');
                seteDate(placeData.endDate || '');
                setDescription(placeData.description || '');
                setImgPlace(placeData.imagePlace || '');
            } else if (isChange) {
                setName(name);
                setsDate(sDate);
                seteDate(eDate);
                setDescription(description);
                setImgPlace(imgPlace);
            }
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
    }, [placeRef, isChange, name, sDate, eDate, description, imgPlace]);

    const deleteData = () => {
        remove(placeRef)
            .then(() => {
                setName('');
                setDescription('');
                setsDate('');
                seteDate('');
                setImgPlace('');
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    const updateData = () => {
        update(placeRef, {
            name: name,
            description: description,
            startDate: sDate,
            endDate: eDate,
            imagePlace: imgPlace
        }).catch((e) => {
            console.log(e);
        });
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setIsChange(true);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        setIsChange(true);
    };

    const handlesDateeChange = (e) => {
        setsDate(e.target.value);
        setIsChange(true);
    };

    const handleeDateChange = (e) => {
        seteDate(e.target.value);
        setIsChange(true);
    };

    const handleImgPlaceChange = (e) => {
        setImgPlace(e.target.value);
        setIsChange(true);
    };

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
                        onChange={handleNameChange} />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        id='description'
                        name='description'
                        placeholder="Write something..."
                        value={description}
                        onChange={handleDescriptionChange}>

                    </textarea>
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='sDate'>Start Date:</label>
                    <input
                        type='date'
                        id='sDate'
                        value={sDate}
                        onChange={handlesDateeChange} />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='eDate'>End Date:</label>
                    <input
                        type='date'
                        id='eDate'
                        value={eDate}
                        onChange={handleeDateChange} />
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='img'>Select Image:</label>
                    <input
                        type='text'
                        id='img'
                        placeholder='Place image...'
                        accept='image/*'
                        value={imgPlace}
                        onChange={handleImgPlaceChange} />
                </div>
                <div className={classes.form_btns}>
                    <input className={classes.remove} onClick={deleteData} type="submit" value='Delete' />
                    <button className={classes.save} onClick={updateData}>Save</button>
                </div>
            </div>
        </form>
    )
}
