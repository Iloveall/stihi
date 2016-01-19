angular
  .module('app')
  .factory('Blog', ['$scope', function ($scope) {

    'use strict';

    console.log('blogService');

    var f = {};

    f.get = function () {

    };

    return f;

  }]);
