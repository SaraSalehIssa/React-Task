import React from 'react';
import StartFirebase from "../components/firebaseConfig/index";
import { Link } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import classes from './PlaceData.module.css';

const database = StartFirebase();
const placesRef = ref(database, 'places/');

let Dummy_Events = [];

onValue(placesRef, (snapshot) => {
    const placesData = snapshot.val();
    //console.log(placesData);

    if (placesData) {
        Object.keys(placesData).forEach((key) => {
            const placeData = placesData[key];
            placeData.key = key;
            //console.log(placeData);
            Dummy_Events.push(placeData);
        });
    } else {
        console.log('No data found.');
    }
}, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});

export default function PlaceData() {
    return <>
        <div className={classes.container}>
            <div className={classes.places_container}>
                <ul className={classes.placeItems}>
                    {
                        Dummy_Events.map(event => <li key={event.key}>
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
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </>
}
