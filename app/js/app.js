'use strict';

var angular = require('angular');

angular
    .module('ibeerApp', [
        require('ui-router')
    ]);

angular
    .element(document)
    .ready(function () {
        angular.bootstrap(document, ['ibeerApp']);
    });