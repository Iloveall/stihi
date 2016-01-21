angular
  .module('app')
  .controller('postCtrl', ['$scope', '$uibModal', 'post', function ($scope, $uibModal, post) {

    'use strict';

    var c = {};

    c.post = post;

    console.log('postCtrl', post);

    return c;

  }]);
