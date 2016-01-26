angular
  .module('app')
  .controller('postCtrl', ['$scope', 'Post', function ($scope, Post) {

    'use strict';

    var c = {};

    $scope.post = {};

    c.add = function (form) {

      console.log(form);

      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      if (form.$invalid) {
        return;
      }

      // Post.add().success(function(response) {
      //
      //   c.messages = response.messages;
      //
      // }).error(function(response) {
      //
      //   c.errors = response.errors;
      //
      // });

    };

    return c;

  }]);
