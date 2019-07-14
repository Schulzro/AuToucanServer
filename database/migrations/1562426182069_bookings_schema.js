'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingsSchema extends Schema {
  up () {
    this.table('bookings', (table) => {
      // alter table
      table.string('reference').after('id');
    })
  }

  down () {
    this.table('bookings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BookingsSchema
