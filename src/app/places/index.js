'use strict';

var ibeerApp = require('angular').module('ibeerApp'),
    states = require('./configurations/states'),
    placesListController = require('./controllers/list.js');

ibeerApp
    .config(states)
    .controller('PlacesListController', placesListController);