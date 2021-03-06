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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.post('/register', 'AuthController.register');

Route.get('/users', 'AuthController.index').middleware('auth');

Route.post('/authenticate', 'AuthController.authenticate');

Route.group(() => {
    Route.resource("services", "ServiceController").apiOnly();
}).middleware('auth');

Route.group(() => {
    Route.resource("instructor", "InstructorController").apiOnly().except('update').except('destroy');
}).middleware('auth');


Route.group(() => {
    Route.resource("associate", "AssociateController").apiOnly().except('update').except('destroy');
}).middleware('auth');