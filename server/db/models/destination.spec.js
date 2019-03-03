/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Destination = db.model('destination')

describe('Destination model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('findByAmenities', () => {
    let myCity

    beforeEach(async () => {
      myCity = await Destination.create({
        name: 'My City',
        imageUrl: '/JetBlue_Airways_Logo.png',
        amenities: ['Beach', 'Family']
      })
    })

    it('returns destinations with amenities', () => {
      expect(myCity.findByAmenities(['Beach'])).to.be.instanceOf(Destination)
    })

    it('returns null if no destination is found', () => {
      expect(myCity.findByAmenities(['Ski'])).to.be.equal(null)
    })
  }) // end describe('correctPassword')
}) // end describe('instanceMethods')
