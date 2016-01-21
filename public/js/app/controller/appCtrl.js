angular
  .module('app')
  .controller('appCtrl', ['$scope', '$uibModal', 'User', function ($scope, $uibModal, User) {

    'use strict';

    var c = {};

    c.isAuth = false;
    c.isAuthLoaded = false;

    c.getIsAuth = function () {
      c.isAuthLoaded = false;
      User.getIsAuth().success(function(response) {
        c.isAuth = true;
        c.isAuthLoaded = true;
      }).error(function(response) {
        c.isAuth = false;
        c.isAuthLoaded = true;
      });
    }

    c.getIsAuth();

    return c;

  }]);
