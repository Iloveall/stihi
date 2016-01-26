angular
  .module('app')
  .controller('authCtrl', ['$scope', 'ngDialog', 'User', function ($scope, ngDialog, User) {

    'use strict';

    var c = {};

    $scope.user = {};
    c.authErrors = null;
    c.authMessages = null;
    c.isAuthSuccess = false;

    // console.log('authCtrl');

    c.register = function (form) {

      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      if (form.$invalid) {
        return;
      }

      User.create($scope.user).success(function(response) {

        c.user = response.user;
        c.authMessages = response.messages;
        c.authErrors = null;

      }).error(function(response) {

        c.authErrors = response.errors;
        c.authMessages = null;

      });
    };

    c.auth = function (form) {

      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      if (form.$invalid) {
        return;
      }

      User.auth($scope.user).success(function(response) {

        c.user = response.user;
        c.authMessages = response.messages;
        c.authErrors = null;
        c.isAuthSuccess = true;

        User.setUser(response.user);

      }).error(function(response) {

        c.authErrors = response.errors;
        c.authMessages = null;

      });
    };

    c.authModalClose = function () {
      ngDialog.close();
    };

    return c;

  }]);
