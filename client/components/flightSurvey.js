import React from 'react'
import {connect} from 'react-redux'
import thumbsup from '../../public/thumbsup.png'
import thumbsdown from '../../public/thumbsdown.png'
import {Button} from '@material-ui/core'

const surveyQuestions = [
  'How was your experience?',
  'Would you recommend JetBlue to a friend?',
  'The following questions are regarding the JetBlue travel process',
  'How was the check in process?',
  'How was navigating JetBlue.com?',
  'Was the airport staff helpful?',
  'Ease of passing through security?',
  'Helpfulness of staff after security?',
  'How was the airpot terminal?',
  'How was the boarding process?'
]

class FlightSurvey extends Component {
  constructor() {
    super()
    this.state = {
      question: surveyQuestions[0]
    }
  }

  render() {
    return (
      <div>
        <h2>{this.question}</h2>
        <div id="vote">
          <Button>
            <img id="thumbsup" src={thumbsup} height="60" alt="thumbs up" />
          </Button>
          <Button>
            <img
              id="thumbsdown"
              src={thumbsdown}
              height="60"
              alt="thumbs down"
            />
          </Button>
        </div>
      </div>
    )
  }
}
