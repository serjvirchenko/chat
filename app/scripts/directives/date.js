'use strict';

/**
 * @ngdoc directive
 * @name chatApp.directive:date
 * @description
 * # date
 */
angular.module('chatApp')
  .directive('date', function () {
    return {
      link: function postLink(scope, element, attrs) {
          scope.$watch(function(){
              var currentDate = +new Date();
              var messDate = new Date(attrs.date);
              if((currentDate - attrs.date) < 60 * 1000){
                  element.html('меньше минуты назад')
              } else if((currentDate - attrs.date) < 60 * 60 * 1000){
                  var a = new Date(currentDate - attrs.date)
                  element.html(a.getMinutes() + ' минут(ы) назад')
              } else if((currentDate - attrs.date) < 24 * 60 * 60 * 1000){
                  var a = new Date(currentDate - attrs.date)
                  element.html(a.getHours() + ' час(ов) назад')
              } else if((currentDate - attrs.date) > 24 * 60 * 60 * 1000){
                  element.html(messDate.getDate() + '.' + (messDate.getMonth() + 1) + '.' + messDate.getFullYear() + ', ' + messDate.getHours() + ':' + messDate.getMinutes())
              }
          })
      }
    };
  });
