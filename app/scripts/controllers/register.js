'use strict';

angular.module('demo2App')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function(){
      
      var url = '/';
      var user = {};
      
      $http.post(url, user)
        .success(function(res){
          alert('success', 'OK!', 'You have registered successfully')
        })
        .error(function(err){
          alert('warning', 'Oops!', 'Could not register')
        });
      }
  });
