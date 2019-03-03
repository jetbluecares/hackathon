import axios from 'axios'

const GET_DESTINATION = 'GET_DESTINATION'

const defaultDestination = {
  destination: {}
}

const getDestination = destination => ({type: GET_DESTINATION, destination})

export const getCity = () => async dispatch => {
  try {
    const res = await axios.get('/destinations')
    dispatch(getDestination(res.data || defaultDestination))
  } catch (err) {
    console.error(err)
  }
}

export const destination = (state = defaultDestination, action) => {
  switch (action.type) {
    case GET_DESTINATION:
      return action.destination
    default:
      return state
  }
}
