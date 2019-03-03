import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_ITEMS = 'SET_ITEMS'

/**
 * INITIAL STATE
 */
const items = []

/**
 * ACTION CREATORS
 */
export const setItems = allItems => ({type: SET_ITEMS, items: allItems})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = items, action) {
  switch (action.type) {
    case SET_ITEMS:
      return action.items
    default:
      return state
  }
}
