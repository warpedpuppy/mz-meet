import React, {Component} from 'react'; 

class Event extends Component {

    state= {
        showDetails: false
    };

    handleShowDetails = () => {
        if(this.state.showDetails === false) {
            this.setState({showDetails: true});
        } else {
            this.setState({showDetails: false});
        }
    }

    render() {

        const showDetails = this.state.showDetails;
        const {event} = this.props;

        return (
            <div className='event'>
                <div className='event-overview'>
                    <h3 className='summary'>{event.summary}</h3>
                    <h5 className='location'>{event.location}</h5>
                    <h5 className='start-time'>{event.start.dateTime}</h5>
                    {!showDetails && <button 
                        className='details-button'
                        onClick={this.handleShowDetails}> Show Event Details
                    </button>}
                    {showDetails && <button
                        className='details-button'
                        onClick={this.handleShowDetails}> Hide Event Details
                    </button>}
                </div>

                {showDetails && (
                    <div className='event-details'>
                        <p className='description'>{event.description}</p>
                        <p className='end-time'>{event.end.dateTime}</p>
                        <p className='time-zone'>{event.start.timeZone}</p>
                        <p className='orginzer-email'>{event.organizer.email}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Event;