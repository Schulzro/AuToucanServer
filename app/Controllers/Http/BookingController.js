'use strict'

const Booking = use('App/Models/Booking')
const { validate } = use('Validator')
const randomstring = require ('randomstring');

class BookingController {
    async all({ request, response }) {
        // get all bookings from the database
        const bookings = await Booking.all();
        response.type('application/json');
        return response.ok(bookings);
    }

    async getByReference({params, response}) {
        const reference = params.reference;
        const data = {reference: reference};
        const rules = {
            reference: 'required|min:6|max:6'
        };
        const validation = await validate(data, rules);
        if(validation.fails()) {
            return response.status(400).send(validation.messages());
        }
        const booking = await Booking.findByOrFail('reference', reference);
        return response.ok(booking);
    }

    async store({ request, response }) {

        const reference = randomstring.generate({
            length: 6,
            charset: 'alphabetic'
          });

        const data = request.only(['name', 'email', 'booking_start_date', 'booking_end_date']);
        data.reference = reference;
        const results = await this.isBookingFree(data.booking_start_date);
        if(results) {
            return response.status(400).json({
                status: 400,
                message: 'Dates non disponibles'
            });
        }
        const booking = await Booking.create(data);

        // await Mail.send('emails.bookingConfirmed', booking.toJSON(), (message) => {
        //     message.from('<no-reply>autoucan@gmail.com')
        //     message.to(booking.email)
        //     .subject('Reservation Noirmoutier')
        // })

        return response.created(booking);
    }

    async isBookingFree(booking_start_date) {
        const bookings = await Booking
        .query()
        .where('booking_start_date', '>', booking_start_date)
        .andWhere('booking_end_date', '<=', booking_start_date)
        .fetch();
        return bookings.toJSON().isOne;
    }

    update({ request, response }) {
        //
    }

    async destroy({ request, response }) {
        // delete a booking by reference string
        const reference = request.only(['reference']).reference;
        const booking = await Booking.findByOrFail('reference', reference);
        await booking.delete();
        return response.ok(booking);
    }
}

module.exports = BookingController
