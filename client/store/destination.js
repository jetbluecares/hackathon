import axios from 'axios'

const GET_DESTINATION = 'GET_DESTINATION'

const destination = []

const getDestination = allDestinations => ({
  type: GET_DESTINATION,
  destination: allDestinations
})

export const getCity = () => async dispatch => {
  try {
    console.log('made it to thunk getCity')
    const res = await axios.get('/api/destinations')
    dispatch(getDestination(res.data || destination))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = destination, action) {
  switch (action.type) {
    case GET_DESTINATION:
      return action.destination
    default:
      return state
  }
}
