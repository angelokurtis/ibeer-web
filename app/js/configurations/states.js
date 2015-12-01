'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
        url: '/',
        templateUrl: 'partials/places/places-list.html',
        controller: 'PlacesController'
    });
};