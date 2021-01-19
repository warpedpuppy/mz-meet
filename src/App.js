import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch'; 
import {getEvents, extractLocations} from './api';
import NumberOfEvents from './NumberOfEvents';
import './nprogress.css';
// import { render } from '@testing-library/react';

class App extends Component {
  
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32, 
    infoText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState(
          {events, locations: extractLocations(events)}
        );
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    this.setState({
      infoText: ''
    });

    const {currentLocation, numberOfEvents} = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events: 
          events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === 'all') ?
          events: 
          events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount
        });
      });
    }
  }

  // getData = () => {
  //   const {locations, events} = this.state;
  //   const data = locations.map((location) => {
  //     const number = events.filter((event) => event.location === location).length;
  //     const city = location.split(',').shift();
  //     return {city, number};
  //   })
  //   return data;
  // };

  render() {
    return (
      <div className="App">
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/> 
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
