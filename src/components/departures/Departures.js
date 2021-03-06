import React from 'react';
import PropTypes from 'prop-types';
import DepartureDetails from '../departureDetails/DepartureDetails';
import { connect } from 'react-redux';

import './Departures.scss';

export const Departures = (props) => {
    return (
        <div className="Departures">
            {props.departures.length !== 0 ?
                props.departures.map((departure, index) => {
                    return (
                        <DepartureDetails
                            key={index}
                            departure={departure}
                            originLocation={props.locations[departure.origin_location_id]}
                            destinationLocation={props.locations[departure.destination_location_id]}
                            departure_city="New York"
                            arrival_city="Montréal"
                        />
                    )
                }) : null
            }
        </div>
    )
}

Departures.propTypes = {
    departures: PropTypes.arrayOf(PropTypes.object).isRequired,
    locations: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    departures: state.departures,
    locations: state.locations
});
export default connect(mapStateToProps)(Departures);