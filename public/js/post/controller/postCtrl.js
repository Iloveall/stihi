angular
  .module('app')
  .controller('postCtrl', ['$scope', 'Post', function ($scope, Post) {

    'use strict';

    var c = {};

    c.isSpinner = false;
    c.isAdded = false;
    c.messages = null;
    $scope.post = {};
    c.isEdit = false;

    c.add = function (form) {

      console.log(form);

      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      if (form.$invalid) {
        return;
      }

      c.isSpinner = true;
      Post.create($scope.post).success(function(response) {
        c.isSpinner = false;
        c.isAdded = true;

        Post.add(response.data.post);
        c.messages = response.messages;

      }).error(function(response) {
        c.isSpinner = false;

        c.errors = response.errors;

      });

    };

    c.showEdit = function (id) {
      c.isEdit = true;
    }

    c.edit = function (id) {

    };

    c.destroy = function (id) {

    }

    return c;

  }]);
