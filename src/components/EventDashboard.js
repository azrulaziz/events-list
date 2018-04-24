import React, {Component} from 'react';
import Events from './Events'

// setup url for api call
const url = `https://radiant-garden-47009.herokuapp.com/events`;

class EventDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: '',
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