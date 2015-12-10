'use strict';

var angular = require('angular');

angular
    .module('ibeerApp', [
        require('ui-router')
    ])
    .constant('VERSION', require('../../package.json').version);

require('./places');

angular
    .element(document)
    .ready(function () {
        angular.bootstrap(document, ['ibeerApp']);
    });