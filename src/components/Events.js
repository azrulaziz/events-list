import React from 'react';
import Loader from './Loader';
import {NavLink} from 'react-router-dom';

// setup the component for rendering of each single event 
const Events = (prop) => {
    return (
        <div>
        {prop.events ? <div className="Events">
            {prop.events.map(evt => {
                return (
                    <div key={evt._id} >
                        <NavLink style={{textDecoration: "none", color: "black"}} to={`/${evt._id}`}>
                        <div className="Events__container">
                            <div className="Events__image-div">
                            <img src={evt.event_image} alt="" width="300" height="200" className="Events__img"/>
                            </div>
                            <div className="Events__description">
                                <p className="Events__detail Events__detail--name">{evt.event_name}</p>
                                <p className="Events__detail Events__detail--date">{evt.event_date}</p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                )
            })}
        </div> : <Loader /> }
        </div>
    )
}

export default Events