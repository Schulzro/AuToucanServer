'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', faker => {
  return {
    username: faker.username()
  }
})

Factory.blueprint('App/Models/Booking', faker => {
  return {
    name: faker.name(),
    email: faker.email(),
    phone_number: faker.phone({ country: "fr" }),
    number_of_persons: faker.integer({ min: 1, max: 12 }),
    reference: faker.word({ length: 5 }),
    booking_start_date: '2004-10-19 08:23:54+00',
    booking_end_date: '2004-10-19 08:23:54+00'
  }
})