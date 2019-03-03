'use strict'
const db = require('../server/db')
const {User, Destination} = require('../server/db/models')
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const destinations = await Promise.all([
    Destination.create({
      name: 'Los Angeles (LAX)',
      imageUrl1: '/pictures/bigs-Rodeo-Drive-LAX.jpg',
      imageUrl2: '/pictures/Hollywood_SignLAX.jpg',
      imageUrl3: ' /pictures/SKY-SLIDE-LAX.png',
      caption:
        'Enjoy the night life after a shopping day or a great adventure!',
      amenities: ['Beach', 'Nigthtlife'],
      bookHotelUrl:
        'https://hotels.jetblue.com/?intlid=SEARCHRESULTS+%3A%3A+header_main_section',
      origins: ['New York (JFK)'],
      bookFlightUrl: 'https://www.jetblue.com/flights'
    }),
    Destination.create({
      name: 'ARUBA (AUA)',
      imageUrl1: '/pictures/EaglebeachAruba.jpg',
      imageUrl2: '/pictures/ScubaDivingAruba.jpg',
      imageUrl3: '/pictures/TrolleyAruba.jpg',
      caption: 'Enjoy the beach after a shopping day or a great adventure!',
      amenities: ['Beach', 'Family'],
      bookHotelUrl:
        'https://hotels.jetblue.com/?intlid=SEARCHRESULTS+%3A%3A+header_main_section',
      origins: ['New York (JFK)'],
      bookFlightUrl: 'https://www.jetblue.com/flights'
    }),
    Destination.create({
      name: 'Jamaica (MBJ)',
      imageUrl1: '/pictures/SlidingJAM.jpg',
      imageUrl2: '/pictures/waterfallJAM.jpg',
      imageUrl3: '/pictures/Sandals-Royal-CaribbeanJAM.jpg',
      caption: 'Explore the island life and sunny beaches!',
      amenities: ['Beach', 'Family'],
      bookHotelUrl:
        'https://hotels.jetblue.com/?intlid=SEARCHRESULTS+%3A%3A+header_main_section',
      origins: ['New York (JFK)'],
      bookFlightUrl: 'https://www.jetblue.com/flights'
    }),
    Destination.create({
      name: 'Grand Cayman (GCM)',
      imageUrl1: '/pictures/Seven-Mile-BeachGMC.jpg',
      imageUrl2: '/pictures/Bareback-RideGMC.jpg',
      imageUrl3: '/pictures/mermaidGMC.jpg',
      caption: 'Explore the underwater adventures!',
      amenities: ['Beach', 'Family'],
      bookHotelUrl:
        'https://hotels.jetblue.com/?intlid=SEARCHRESULTS+%3A%3A+header_main_section',
      origins: ['New York (JFK)'],
      bookFlightUrl: 'https://www.jetblue.com/flights'
    }),
    Destination.create({
      name: 'Salt Lake City (SLC)',
      imageUrl1: '/pictures/TempleSquare.jpeg',
      imageUrl2: '/public/pictures/skiSLC.jpg',
      imageUrl3: '/public/pictures/RedBottleGardenSLC.jpg',
      caption: 'Ski and see landmarks and enjoy nature!',
      amenities: ['Ski', 'Family'],
      bookHotelUrl:
        'https://hotels.jetblue.com/?intlid=SEARCHRESULTS+%3A%3A+header_main_section',
      origins: ['New York (JFK)'],
      bookFlightUrl: 'https://www.jetblue.com/flights'
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${destinations.length} destinations`)
  console.log(`seeded successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
