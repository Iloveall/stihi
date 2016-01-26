angular
  .module('app')
  .factory('Post', ['$http', function ($http) {

    'use strict';

    console.log('postService');

    var f = {};

    var URL = 'api/post';

    f.get = function () {
      return $http.get(URL);
    };

    f.create = function () {
      return $http.post(URL);
    };

    return f;

  }]);
