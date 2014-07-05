'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
