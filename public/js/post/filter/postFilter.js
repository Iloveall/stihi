angular
  .module('app')
  .filter('timeFilter', function() {
    return function(date) {

      moment.locale('ru');

      return moment(date).fromNow();

    };
  });
