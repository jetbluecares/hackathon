const Sequelize = require('sequelize')
const db = require('../db')

const Destination = db.define(
  'destination',
  {
    name: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    caption: {
      type: Sequelize.STRING
    },
    amenities: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    bookHotelUrl: {
      type: Sequelize.STRING
    },
    origins: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    bookFlightUrl: {
      type: Sequelize.STRING
    }
  }
  // {
  //   validate: {
  //     amenitesContained() {
  //       if (
  //         this.amenities.includes('Beach') ||
  //         this.amenities.includes('Ski') ||
  //         this.amenities.includes('Nighlife') ||
  //         this.amenities.includes('Family')
  //       ) {
  //         throw new Error("Doesn't meet the criteria")
  //       }
  //     }
  //   }
  // }
)

// Destination.findByAmenities = function(amenities) {
//   return Destination.findAll(amenities)
// }

module.exports = Destination
