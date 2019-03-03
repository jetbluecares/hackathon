import React from 'react'
import {Link} from 'react-router-dom'
import {Category} from '../components'
import {snacks, drinks, comfort} from '../images'

const MainScreen = () => {
  const titles = [
    'Snacks',
    'Drinks',
    'Entertainment',
    'Comfort',
    'Call Attendant',
    'Give Feedback'
  ]
  console.log('MADE IT TO MAIN SCREEN', titles)

  return (
    <div className="main-container">
      <div className="main-header">
        <h1>Jetblue</h1>
      </div>

      <div className="main-question">
        <h2>What can we help you with?</h2>
      </div>

      <div className="main-selections">
        <div>
          {titles.map(selection => (
            <Selection key={selection} title={selection} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainScreen
