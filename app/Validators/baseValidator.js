'use strict'

class baseValidator {
  get rules () {
    return {
      // validation rules
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = baseValidator
