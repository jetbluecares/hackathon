import React from 'react'
import {Selection} from '../components'

const SelectionScreen = props => {
  return (
    <div className="main-container">
      <div className="main-header">
        <h1>Select Below</h1>
      </div>

      <div className="main-selections">
        <div>
          {props.selections.map(selection => (
            <Selection
              key={selection.name}
              name={selection.name}
              image={selection.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectionScreen
