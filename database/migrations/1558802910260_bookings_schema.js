'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingsSchema extends Schema {
  up () {
    this.table('bookings', (table) => {
      // alter table
      table.timestamp('booking_start_date').notNullable().alter();
    })
  }

  down () {
    this.table('bookings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BookingsSchema
