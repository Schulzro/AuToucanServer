'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {
    static boot () {
        super.boot()
        this.addHook('beforeSave', 'BookingHook.checkDates')
      }
}

module.exports = Booking
