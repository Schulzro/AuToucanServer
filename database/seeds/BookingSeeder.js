'use strict'

/*
|--------------------------------------------------------------------------
| BookingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class BookingSeeder {
  async run() {
    await Factory
      .model('App/Models/Booking')
      .createMany(10);
    const bookings = await Database.table('bookings');
    console.log(bookings);
  }
}

module.exports = BookingSeeder
