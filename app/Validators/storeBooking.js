'use strict'
const baseValidator = require('./baseValidator.js');

class storeBooking extends baseValidator {
  get rules () {
    return {
      // validation rules
      email: 'required|email|string',
      name: 'required|string',
      booking_start_date: 'required|date',
      booking_end_date: 'required|date',
      number_of_persons: 'required|number',
      phone_number: 'required'
    }
  }
}

module.exports = storeBooking
