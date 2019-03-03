import React from 'react'
import {connect} from 'react-redux'
import thumbsup from '../../public/thumbsup.png'
import thumbsdown from '../../public/thumbsdown.png'

const FlightSurvey = () => {
  return (
    <div>
      <h2>{this.question}</h2>
      <div id="vote">
        <img id="thumbsup" src={thumbsup} height="60" alt="thumbs up" />
        <img id="thumbsdown" src={thumbsdown} height="60" alt="thumbs down" />
      </div>
    </div>
  )
}

//Based on your experience, how would you rate your experience?

//Rate your satisfaction with the following aspects of your travel planning experience with JetBlue:

//How was the check in process?
//How was navigating JetBlue.com?
//How helpful was airport staff?
//Ease of passing through security?
//Helpfulness of staff after security?
//Availaibility of flight information?
//Airpot terminal?
//Boarding process?
