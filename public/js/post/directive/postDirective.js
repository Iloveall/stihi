angular
  .module('app')
  .directive('postEdit', ['$compile', 'Post', function ($compile, Post) {
    return {
      restrict: 'EA',
      scope: true,
      link: function (scope, element, attr) {

        scope.isEdit = false;

        scope.showEdit = function() {
          scope.isEdit ? scope.isEdit = false : scope.isEdit = true;
        };

        scope.update = function () {

          if (scope.form) {
            scope.form.$setPristine();
            scope.form.$setUntouched();
          }

          if (scope.form.$invalid) {
            return;
          }

          Post.update(scope.post).success(function(response) {
            scope.isEdit = false;
          });
        };

        scope.destroy = function (id) {
          Post.destroy(id).success(function(response) {
            Post.delete(id);
          });
        }

        // console.log(scope);

      }
    };
  }]);
