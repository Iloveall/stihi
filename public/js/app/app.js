angular
  .module('app', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'js/view/post/list.html',
      controller: 'blogCtrl as blogCtrl'
    });
  }]);
  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider.otherwise({redirectTo: '/view1'});
  // }]);
