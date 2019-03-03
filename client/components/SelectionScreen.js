import React from 'react'
import {Item} from '../components'
import {connect} from 'react-redux'

const SelectionScreen = props => {
  console.log('DID WE MAKE IT', props)
  const {items} = props
  return (
    <div className="selection-container">
      <div className="selection-header">
        <h1>Select Below</h1>
      </div>

      <div className="selections-items">
        <div>
          {items.map(item => (
            <Item key={item.name} name={item.name} image={item.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapState = state => ({
  items: state.items
})

export default connect(mapState)(SelectionScreen)
