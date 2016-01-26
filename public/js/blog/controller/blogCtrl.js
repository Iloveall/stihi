angular
  .module('app')
  .controller('blogCtrl', ['$scope', 'ngDialog', 'Post', function ($scope, ngDialog, Post) {

    'use strict';

    var c = {};

    c.isSpinner = true;
    c.isAnimation = true;

    c.posts = null;
    // c.blogs = [
    //   {
    //     'id': '1',
    //     'user_id': '1',
    //     'title': 'Котик мурмотик',
    //     'description': 'Стишочек про котика мурмотика',
    //     'text': 'Котик мурмотик - мягкий животик, Острые зубки и влажненький носик. Лежит на подушке и сладко зевает, Его там за ушко - Насяся щипает'
    //   },
    //   {
    //     'id': '2',
    //     'user_id': '1',
    //     'title': 'Зайка мой хороший',
    //     'description': 'Стишочек про зайчика',
    //     'text': 'Зайчик мой хороший - умненький красивый, Знает он все коды - коды бутерброды!! Сайтики красивые - всеееем он нарисует, Но а Наську Маську - потом он - утром зацелует'
    //   },
    //   {
    //     'id': '3',
    //     'user_id': '1',
    //     'title': 'Сказочку дарю тебе',
    //     'description': 'Стишочек про оленя',
    //     'text': 'Сказку даришь каждый день, И надев костюм Олень - Ты танцуешь до упада И смешишшь Меня Как Надо :) Целовашки целоваешь - крепко крепко обнимаешь, И обняв меня так сладко - Ти найкраще кошенятко =*'
    //   }
    // ];

    c.getBlogs = function () {

      Post.get().success(function(response) {
        c.posts = response.data.posts;

        // $scope
        console.log(c.posts);
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

    return c;

  }]);
