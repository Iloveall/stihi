angular
  .module('app')
  .factory('Post', ['$rootScope', '$http', 'User', function ($rootScope, $http, User) {

    'use strict';

    var f = {};

    var posts = null;

    var URL = 'api/post';

    f.get = function () {
      return $http.get(URL);
    };

    f.getById = function (id) {
      return $http.get(URL + '/' + id);
    };

    f.create = function (data) {
      return $http.get(
        URL + '/create?' + User.getTokenParam(),
        {params: data}
      );
    };

    f.add = function (post) {
      $rootScope.$broadcast('postUpdate', post);
    };

    return f;

  }]);
