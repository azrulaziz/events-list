import React, {Component} from 'react';
import Loader from './Loader';

// api calls for single page of an event
const url = `https://radiant-garden-47009.herokuapp.com/events`;

class EventPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventList: '',
        }
    }

    componentDidMount() {
        this.fetchEvent();
    }
    
    fetchEvent() {
    fetch(`${url}`)
    .then(response => response.json())
    .then(result => this.getEvents(result))
    }
    
    getEvents(result) {
    this.setState({eventList: result})
    }

    render() {
        const {eventList} = this.state;
        return (
            <div>
                {eventList ? 
                    // filter the event list to look for the event that is clicked based on its id
                <div className="EventPage">
                    {eventList.filter(evt => evt._id === this.props.match.params.id)
                        .map(evt => {
                        return (
                            <div key={evt._id} className="EventPage__wrapper">
                            <div className="EventPage__image">
                                <img src={evt.event_image} alt=""  className="Events__img img-evt"/>
                            </div>
                            <div className="EventPage__details">
                                <div className="EventPage__details--name">
                                    <h1>{evt.event_name}</h1>
                                    <p>{evt.event_date}</p>
                                </div>
                                <div className="EventPage__details--price">
                                    <h3>RM{evt.event_price}</h3>
                                    <button className="EventPage__details--btn">Buy Now</button>
                                </div>
                                <div className="EventPage__details--type">
                                    <p>Event Type: {evt.event_type}</p>
                                </div>
                            </div>
                            </div>
                        )
                    })} 
                </div> : 
                // if the data from the API is not yet loaded, run this loader component
                <Loader /> }
            </div>
        )
    }
}

export default EventPage