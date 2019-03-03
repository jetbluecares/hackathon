const router = require('express').Router()
const {Destination} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const destinations = await Destination.findAll({
      // explicitly select only the name and amenities fields
      attributes: ['name', 'amenities', 'id']
    })
    res.json(destinations)
  } catch (err) {
    next(err)
  }
})

router.get('/:amenity', async (req, res, next) => {
  try {
    const amenity = req.params.amenity
    const destinations = await Destination.findAll({
      where: {
        amenities: {
          [Op.contains]: [amenity]
        }
      }
    })
    res.json(destinations)
  } catch (err) {
    next(err)
  }
})
