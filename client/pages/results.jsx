import React from 'react';
import convertDateTime from '../lib/convertDateTime';

export default function Results(props) {

  function renderEvents() {

    return props.results.map((event, index) => (
      <div key={event.id} className="row test">
        <div className="search-events-date-container">
          <h3>{convertDateTime(event.datetime_local).date.toUpperCase()}</h3>
        </div>
        <div className="search-events-venue-container">
          <h3>{`${event.venue.name} | ${event.venue.display_location}`}</h3>
        </div>
      </div>
    ));

  }

  return (
    <div className="search-events-container">
      <div className="search-events-flex">
        <div className="search-results-container">
          <div className="row">
            <img className="search-results-image" src={props.results[0].performers[0].image}></img>
            <div className="search-results-header-text-container">
              <h1 className="search-results-header-text">{props.results[0].performers[0].name.toUpperCase()}</h1>
            </div>
          </div>
          {renderEvents()}
        </div>
      </div>
    </div>
  );
}
