angular
  .module('app')
  .filter('isAvatar', function() {
    return function(input) {

      if (input === "") {
        return "/img/icon/avatar.png";
      }

      return input;
    };
  })
