import axios from 'axios'

const GET_DESTINATION = 'GET_DESTINATION'
const GET_ONE_CITY = 'GET_ONE_CITY'

const destination = []

const getDestination = allDestinations => ({
  type: GET_DESTINATION,
  destination: allDestinations
})

const getOneCity = oneCity => ({
  type: GET_ONE_CITY,
  destination: [oneCity]
})

export const getCity = () => async dispatch => {
  try {
    const res = await axios.get('/api/destinations')
    dispatch(getDestination(res.data || destination))
  } catch (err) {
    console.error(err)
  }
}

export const getOneDestination = amenities => async dispatch => {
  try {
    console.log('made it to thunk getOneCity')
    const res = await axios.get(`/api/destinations/:{amenities[0]}`)
    dispatch(getOneCity(res.data || ''))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = destination, action) {
  switch (action.type) {
    case GET_DESTINATION:
      return action.destination
    case GET_ONE_CITY:
      return action.destination
    default:
      return state
  }
}
