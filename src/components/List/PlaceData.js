import React, { useState, useEffect } from 'react';
import StartFirebase from '../firebaseConfig/index';
import { Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classes from './PlaceData.module.css';

const database = StartFirebase();
const placesRef = ref(database, 'places');

function PlaceData() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onValue(placesRef, (snapshot) => {
            const placesData = snapshot.val();

            if (placesData) {
                const newEvents = Object.keys(placesData).map((key) => {
                    const placeData = placesData[key];
                    placeData.key = key;
                    return placeData;
                });

                setEvents(newEvents);
                setIsLoading(false);
            }
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
    }, []);

    return (
        <div className={classes.container}>
            {(!isLoading && <div className={classes.places_container}>
                <ul className={classes.placeItems}>
                    {
                        events.map((event) => (
                            <li key={event.key}>
                                <Link to={event.key}>
                                    <div className={classes.place}>
                                        <img className={classes.img} src={`${event.imagePlace}`} alt={event.name} />
                                        <div className={classes.info}>
                                            <h2>{event.name}</h2>
                                            <p>{event.startDate}</p>
                                            <p>{event.endDate}</p>
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>) || (isLoading && <FontAwesomeIcon
                className={classes.spinner}
                icon={faSpinner}
            />)}
        </div>
    );
}

export {PlaceData};
