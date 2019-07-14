'use strict'

const { test, trait } = use('Test/Suite')('Create Booking')
const Booking = use('App/Models/Booking')

trait('Test/ApiClient')

test('can create a booking if valid data', async ({ assert, client }) => {
  const data = {
    name : 'Schulz',
    email : 'benschuro@gmail.com',
    booking_start_date : '2004-10-19T08:23:54.000Z',
    booking_end_date : '2004-10-21T08:23:54.000Z'
  };

  const response = await client.post('/api/bookings').send(data).end();

  response.assertStatus(201);
  response.assertJSONSubset({
    name : 'Schulz',
    email : 'benschuro@gmail.com',
    booking_start_date : '2004-10-19T08:23:54.000Z',
    booking_end_date : '2004-10-21T08:23:54.000Z'
  });
})
