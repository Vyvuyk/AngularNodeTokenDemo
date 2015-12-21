'use strict';

/**
 * @ngdoc function
 * @name demo2App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the demo2App
 */
angular.module('demo2App')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function(){
      console.log("test");
    }
  });
