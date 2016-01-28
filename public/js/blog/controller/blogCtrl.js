angular
  .module('app')
  .controller('blogCtrl', ['$scope', 'ngDialog', 'Post', function ($scope, ngDialog, Post) {

    'use strict';

    var c = {};

    c.isSpinner = false;
    c.isAnimation = true;

    c.posts = null;

    $scope.$watch(function(){

      return c.posts;

    }, function(oldData, newData) {

      Post.posts = c.posts;

      console.log('watch posts', c.posts);

    });

    c.getBlogs = function () {

      Post.get().success(function(response) {
        c.posts = response.data.posts;
        // console.log(c.posts);
      });

    };

    c.openPost = function (id) {

      var post = c.getPostById(id);

      ngDialog.open({
        template: 'js/post/template/post-popup.html',
        className: 'ngdialog-theme-default',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        controller: 'postCtrl',
        controllerAs: 'postCtrl',
        data: {
          post: post
        }
      });
    };

    c.openAdd = function () {
      ngDialog.open({
        template: 'js/post/template/add-popup.html',
        className: 'ngdialog-theme-default',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        controller: 'postCtrl',
        controllerAs: 'postCtrl'
      });
    };

    c.getPostById = function (id) {
      return _.find(c.blogs, function(o) { return o.id === id; });
    };

    $scope.$on('postUpdate', function (data, post) {
      console.log('post update', post);
      c.posts.unshift(post);
    });

    $scope.$on('postDelete', function (data, id) {
      console.log('post delete', id);

      _.remove(c.posts, {
          id: id
      });

    });

    return c;

  }]);
