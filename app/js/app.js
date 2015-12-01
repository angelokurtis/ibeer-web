'use strict';

var angular = require('angular');

angular
    .module('ibeerApp', [
        require('ui-router')
    ])
    .config(require('./configurations/states'))
    .controller('PlacesController', require('./controllers/places-controller.js'));

angular
    .element(document)
    .ready(function () {
        angular.bootstrap(document, ['ibeerApp']);
    });