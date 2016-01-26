angular
  .module('app')
  .controller('appCtrl', ['$scope', 'User', function ($scope, User) {

    'use strict';

    var c = {};

    c.isAuth = false;
    c.isAuthLoaded = false;
    c.user = {};

    // User
    $scope.$watch(function () {
      return c.user;
    }, function() {
      User.setUser(c.user);
    });

    c.getIsAuth = function () {
      c.isAuthLoaded = false;
      User.getIsAuth().success(function(response) {
        c.isAuth = true;
        c.isAuthLoaded = true;
        c.user = response.data.user;
      }).error(function(response) {
        c.isAuth = false;
        c.isAuthLoaded = true;
      });
    };

    $scope.$on('setAuthOn', function(e, data) {
      c.isAuth = true;
      c.user = data.user;
      console.log(data);
    });

    $scope.$on('userExit', function() {
      c.isAuth = false;
    });

    c.getIsAuth();

    return c;

  }]);
