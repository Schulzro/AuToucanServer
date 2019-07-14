'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingsSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table.timestamp('booking_start_date')
      table.timestamp('booking_end_date')
      table.text('name')
      table.text('email')
      table.text('phone_number')
      table.text('comments')
      table.integer('number_of_persons')
      table.decimal('booking_amount')
      table.timestamps()
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingsSchema
