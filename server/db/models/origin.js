const Sequelize = require('sequelize')
const db = require('../db')
const Destination = require('./destination')

const Origin = db.define('origin', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.ARRAY[Sequelize.TEXT]
  },
  destinations: {
    type: Sequelize.ARRAY[Sequelize.STRING]
  }
})

Origin.prototype.findDestinations = function() {
  return Destination.findAll({where: {origins: Origin}})
}

module.exports = Origin
