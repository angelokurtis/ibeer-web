'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
        url: '/',
        templateUrl: './app/places/views/list.html',
        controller: 'PlacesListController'
    });
};