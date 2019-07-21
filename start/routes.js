'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const DEFAULT_PATH = "/api/";
const Route = use('Route');

Route.get(DEFAULT_PATH + 'bookings', 'BookingController.all');
Route.get(DEFAULT_PATH + 'bookings/:reference', 'BookingController.getByReference');
Route.post(DEFAULT_PATH + 'bookings', 'BookingController.store')
    .validator('storeBooking');
Route.delete(DEFAULT_PATH + 'bookings', 'BookingController.destroyByReference')
    .validator('deleteBooking');
Route.delete(DEFAULT_PATH + 'bookings/:id', 'BookingController.destroyById');