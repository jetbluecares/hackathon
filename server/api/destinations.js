const router = require('express').Router()
const {Destination} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const destinations = await Destination.findAll({
      // explicitly select only the name and amenities fields
      attributes: ['name', 'amenities']
    })
    res.json(destinations)
  } catch (err) {
    next(err)
  }
})
