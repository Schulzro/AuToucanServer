'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingsSchema extends Schema {
  up () {
    this.table('bookings', (table) => {
      // alter table
      table.timestamp('booking_end_date').notNullable().alter();
      table.text('name').notNullable().alter();
      table.text('email').notNullable().alter();
    })
  }

  down () {
    this.table('bookings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BookingsSchema
