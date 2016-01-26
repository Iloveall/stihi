angular
  .module('app')
  .factory('User', ['$rootScope', '$http', '$window', function ($rootScope, $http, $window) {

    'use strict';

    console.log('User');

    var HTTP_URL = 'api/user'

    var f = {};

    var user = null;

    f.getUser = function () {
      return user;
    };

    f.setUser = function (user) {
      user = user;
      f.setToken(user.api_token);
      $rootScope.$broadcast('setAuthOn', {user: user});

      return user;
    };

    f.destroyUser = function (user) {
      user = null;
    }

    f.setToken = function (token) {
      $window.localStorage.setItem('api_token', token);
    };

    f.getToken = function () {
      return $window.localStorage.getItem('api_token');
    };

    f.destroyToken = function () {
      return $window.localStorage.removeItem('api_token');
    };

    f.getTokenParam = function () {
      return 'api_token=' + f.getToken();
    }

    f.create = function (data) {
      return $http.post(HTTP_URL + '/create', data);
    };

    f.auth = function (data) {
      return $http.post(HTTP_URL + '/auth', data);
    };

    f.exit = function () {
      f.destroyToken();
      f.destroyUser();
      $rootScope.$broadcast('userExit', {});
    };

    f.getIsAuth = function () {
      return $http.get(HTTP_URL + '/is-auth?' + f.getTokenParam());
    };

    return f;

  }]);
