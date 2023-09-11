import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PlaceData.module.css';

const Dummy_Events = [
    {
        id: 'e1',
        name: 'Costa Rica',
        describtion: 'Arenal Volcano National Park, gives tourists the chance to see a 1,633-meter-tall volcano with massive ash columns. The park itself boasts rich biodiversity and is home to many of Costa Ricas native species.',
        startDate: '2023-09-08',
        endDate: '2023-09-14',
        imgPlace: 'https://www.planetware.com/wpimages/2020/06/best-cheap-places-to-travel-may-costa-rica.jpg'
    },
    {
        id: 'e2',
        name: 'Cancun, Mexico',
        describtion: 'For more Mayan ruins, book a trip to El Rey. The archeological site contains dozens of buildings and tombs that date back to AD 900. Look out for the resident iguanas that sunbathe on the structures.',
        startDate: '2023-09-8',
        endDate: '2023-09-16',
        imgPlace: 'https://www.planetware.com/wpimages/2020/06/best-cheap-places-to-travel-may-cancun-mexico.jpg'
    }];

export default function PlaceData() {
    return <>
        <div className={classes.container}>
            <div className={classes.places_container}>
                <ul className={classes.placeItems}>
                    {
                        Dummy_Events.map(event => <li key={event.id}>
                            <Link to={event.id}>
                                <div className={classes.place}>
                                    <img className={classes.img} src={`${event.imgPlace}`} alt={event.name} />
                                    <div className={classes.info}>
                                        <h2>{event.name}</h2>
                                        <p>{event.startDate}</p>
                                        <p>{event.endDate}</p>
                                        <p>{event.describtion}</p>
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
