'use strict';

/**
 * @ngdoc directive
 * @name chatApp.directive:scroll
 * @description
 * # scroll
 */
angular.module('chatApp')
  .directive('scroll', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        scope.$watchCollection(attr.scroll, function(newVal) {
            $timeout(function() {
                element[0].scrollTop = element[0].scrollHeight;
            });
        });
      }
    };
  });
