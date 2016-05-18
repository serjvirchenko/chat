'use strict';

/**
 * @ngdoc directive
 * @name chatApp.directive:bgimage
 * @description
 * # bgimage
 */
angular.module('chatApp')
  .directive('bgimage', function () {
      return function(scope, element, attrs){
          var url = attrs.bgimage;
          element.css({
              'background-image': 'url(' + url +')'
          });
      };
  });
