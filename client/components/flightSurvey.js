import React from 'react'
import thumbsup from '../../public/thumbsup.png'
import thumbsdown from '../../public/thumbsdown.png'

const surveyQuestions = [
  'How was your experience?',
  'Would you recommend JetBlue to a friend?',
  'The following questions are regarding the JetBlue travel process',
  'How was the check in process?',
  'How was navigating JetBlue.com?',
  'Was the airport staff helpful?',
  'How was the ease of passing through security?',
  'How was the staff after security?',
  'How was the airport terminal?',
  'How was the boarding process?'
]

let idx = 0

export default class FlightSurvey extends React.Component {
  constructor() {
    super()
    this.state = {
      question: surveyQuestions[idx]
    }
  }

  render() {
    return (
      <div id="survey">
        <h2>{this.state.question}</h2>
        <div id="vote">
          <img
            id="thumbsup"
            src={thumbsup}
            height="60"
            alt="thumbs up"
            onClick={() => {
              idx++
              this.setState({question: surveyQuestions[idx]})
            }}
          />

          <img
            id="thumbsdown"
            src={thumbsdown}
            height="60"
            alt="thumbs down"
            onClick={() => {
              idx++
              this.setState({question: surveyQuestions[idx]})
            }}
          />
        </div>
      </div>
    )
  }
}
