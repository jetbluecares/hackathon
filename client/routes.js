import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

import {
  MainScreen,
  SelectionScreen,
  Destination,
  FlightSurvey
} from './components'
import {me} from './store'
// import {Destination} from './components'
// import destination from './store/destination'

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/flightsurvey" component={FlightSurvey} />
        <Route path="/mainscreen" component={MainScreen} />
        <Route exact path="/category" component={SelectionScreen} />
        <Route path="/destination" component={Destination} />
        <Route path="/" component={MainScreen} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired
// }
