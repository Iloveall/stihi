angular
  .module('app')
  .factory('Post', ['$scope', '$http', function ($scope, $http) {

    'use strict';

    console.log('postService');

    var f = {};

    var URL = 'api/post';

    f.get = function () {
      return $http.get(URL);
    };

    return f;

  }]);
