'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatApp
 */
angular.module('chatApp')
  .controller('MainCtrl', function ($scope, main) {
      $scope.myuserId = 10;
      $scope.main = main;

      $scope.id = 1;

      $scope.getMess = function(arr, id){
          $scope.body = '';
          $scope.body = main.getMessages(arr, id);
          $scope.id = id;
      }
      $scope.isActive = function(id){
          return $scope.id === id;
      }
      $scope.getMess(main.getGroups(), $scope.id);

      $scope.push = function(event, dialog){
          if(event.type == 'keypress' && event.which == '10' && event.ctrlKey == true){
              $scope.textarea += "\r\n";
          }
          if(event.type == 'submit' || (event.type == 'keypress' && event.which == '13' && event.ctrlKey == false)){
              if($scope.textarea !== '' && $scope.textarea != undefined){
                  dialog.messages.push({
                      date: +new Date(),
                      message: $scope.textarea,
                      user: $scope.myuserId,
                  });
                  $scope.textarea = '';
                  console.log('s')
              }
          }
      }
  });
