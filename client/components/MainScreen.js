import React from 'react'
import {Link} from 'react-router-dom'
import {MainSelection} from '../components'

const MainScreen = () => {
  const titles = [
    'snacks',
    'drinks',
    'entertainment',
    'comfort',
    'call attendant',
    'give feedback'
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
          {titles.map(selection => <MainSelection title={selection} />)}
        </div>
      </div>
    </div>
  )
}

export default MainScreen
