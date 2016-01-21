angular
  .module('app')
  .factory('User', ['$rootScope', '$http', function ($rootScope, $http) {

    'use strict';

    console.log('User');

    var HTTP_URL = 'api/user'

    var f = {};

    f.create = function (data) {
      return $http.post(HTTP_URL + '/create', data);
    };

    f.auth = function (data) {
      return $http.post(HTTP_URL + '/auth', data);
    };

    f.getIsAuth = function () {
      return $http.get(HTTP_URL + '/is-auth');
    };

    return f;

  }]);
