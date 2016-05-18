'use strict';

/**
 * @ngdoc filter
 * @name chatApp.filter:search
 * @function
 * @description
 * # search
 * Filter in the chatApp.
 */
angular.module('chatApp')
  .filter('searchFor', function () {
      return function(arr, searchString){
          if(!searchString){
              return arr;
          }
          var result = [];
          searchString = searchString.toLowerCase();
          angular.forEach(arr, function(item){
              if(item.name.toLowerCase().indexOf(searchString) !== -1){
                  result.push(item);
              }
          });
          return result;
      };
  });
