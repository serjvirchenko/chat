'use strict';

/**
 * @ngdoc directive
 * @name chatApp.directive:bgimage
 * @description
 * # bgimage
 */
angular.module('chatApp')
  .directive('bgimage', function () {
      return{
          link: function(scope, element, attrs){
              scope.$watch(function(){
                  element.css({
                      'background-image': 'url(' + attrs.bgimage +')'
                  });
              });
          }
      }
  });
