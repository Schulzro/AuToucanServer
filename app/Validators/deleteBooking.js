'use strict'
const baseValidator = require('./baseValidator.js')

class deleteBooking extends baseValidator {
  get rules () {
    return {
      // validation rules
      reference: 'required|string'
    }
  }
}

module.exports = deleteBooking
