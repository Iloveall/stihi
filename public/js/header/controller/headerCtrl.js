angular
  .module('app')
  .controller('headerCtrl', ['$uibModal', function ($uibModal) {

    'use strict';

    var c = {};

    c.isAnimation = true;

    console.log('headerCtrl');

    c.openAuth = function () {

      var modalInstance = $uibModal.open({
        animation: c.isAnimation,
        templateUrl: 'js/auth/template/auth-popup.html',
        controller: 'authCtrl',
        controllerAs: 'authCtrl',
        size: 'sm',
        resolve: {
          items: function () {
            return '1';
          }
        }
      });

    };

    c.openRegister = function () {

      var modalInstance = $uibModal.open({
        animation: c.isAnimation,
        templateUrl: 'js/auth/template/register-popup.html',
        controller: 'authCtrl',
        controllerAs: 'authCtrl',
        size: 'sm',
        resolve: {
          items: function () {
            return '1';
          }
        }
      });

    };

    return c;

  }]);
