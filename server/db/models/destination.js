const Sequelize = require('sequelize')
const db = require('../db')

const Destination = db.define('destination', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.ARRAY[Sequelize.TEXT]
  },
  caption: {
    type: Sequelize.STRING
  },
  amenities: {
    type: Sequelize.ENUM('Beach', 'Ski', 'Family', 'Nighlife')
  },
  bookHotelUrl: {
    type: Sequelize.STRING
  },
  origins: {
    type: Sequelize.ARRAY[Sequelize.STRING]
  }
})

Destination.findByAmenities = function(amenities) {
  return Destination.findAll(amenities)
}

module.exports = Destination
