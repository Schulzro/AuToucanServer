'use strict'

const BookingHook = exports = module.exports = {}

BookingHook.checkDates = async (booking) => {
    const start_date = new Date(booking.booking_start_date)
    const end_date = new Date(booking.booking_end_date)
    if(end_date < start_date) {
        throw new Error('End Date is before start date');
    }
}
