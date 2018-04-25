import React, {Component} from 'react';
import Events from './Events'

// url for api call
const url = `https://radiant-garden-47009.herokuapp.com/events`;

// main component to show all events in a list
class EventDashboard extends Component {
  // initialize the react component props
  constructor(props) {
    super(props);

    this.state = {
      events: '',
    }
  }

  // make api call after the component is mounted
  componentDidMount() {
    this.fetchEvent();
  }

  // function setup for the api calls
  fetchEvent() {
    fetch(`${url}`)
    .then(response => response.json())
    .then(result => this.getEvents(result))
  }

  // flush the result from api call to the local state
  getEvents(result) {
    this.setState({events: result})
  }

  render() {
    return (
      <div className="App">
        <Events events={this.state.events}/>
      </div>
    );
  }
}

export default EventDashboard;