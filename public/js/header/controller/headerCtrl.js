angular
  .module('app')
  .controller('headerCtrl', ['ngDialog', 'User', function (ngDialog, User) {

    'use strict';

    var c = {};

    c.isAnimation = true;

    console.log('headerCtrl');

    c.openAuth = function () {

      ngDialog.open({
        template: 'js/auth/template/auth-popup.html',
        className: 'ngdialog-theme-default',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        controller: 'authCtrl',
        controllerAs: 'authCtrl'
      });

    };

    c.openRegister = function () {

      ngDialog.open({
        template: 'js/auth/template/register-popup.html',
        className: 'ngdialog-theme-default',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        controller: 'authCtrl',
        controllerAs: 'authCtrl'
      });

    };

    c.exit = function () {
      User.exit();
    };

    return c;

  }]);
