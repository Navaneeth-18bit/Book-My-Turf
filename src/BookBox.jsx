import React from 'react'
import './BookBox.css';


const BookBox = ({venuPlace = "Cochin Sports Arena", rate = "5.4", venueAddress = "Ground, 3/1049, Sanjuan Bhavan, . . ."}) => {
  return (
    <div id="bookBox">
      <div id="venue-inner">
        <div id="venue-image">

        </div>
        <div id="venue-place">
          <div id="venue-place-head">{venuPlace}</div>
          <div id="rate-box">
          {rate}
        </div>
        </div>
        <div id="venue-address">{venueAddress}</div>
      </div>
    </div>
  )
}

export default BookBox