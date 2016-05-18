'use strict';

/**
 * @ngdoc service
 * @name chatApp.main
 * @description
 * # main
 * Factory in the chatApp.
 */
angular.module('chatApp')
  .factory('main', function () {

    var groups = [
        {
            id: '1',
            name: 'MaxiModus',
            newmess: '34',
            avatar: ''
        }
    ]
    var users = [
        {
            id: '2',
            name: 'Thomas Brown',
            newmess: '3',
            avatar: 'http://www.allure.com/images/allure-magazine/2015/04/reading-faces.jpg',
            online: true
        },
        {
            id: '3',
            name: 'Edward LeCristen',
            newmess: '',
            avatar: 'http://all4desktop.com/data_images/original/4242445-face.jpg',
            online: false
        },
        {
            id: '4',
            name: 'Cristian Smith',
            newmess: '4',
            avatar: 'http://proprofs-cdn.s3.amazonaws.com/images/games/user_images/misc/4288844624.png',
            online: false
        },
        {
            id: '5',
            name: 'Sendy Miller',
            newmess: '',
            avatar: 'http://efdreams.com/data_images/dreams/face/face-08.jpg',
            online: true
        },
        {
            id: '6',
            name: 'Princess Murphy',
            newmess: '',
            avatar: '',
            online: false
        },
        {
            id: '7',
            name: 'Artour Bargeman',
            newmess: '7',
            avatar: 'http://www.mega-wallpaper.com/wallpapers/big/34302_women_face.jpg',
            online: false
        }
    ]

    return {
        getGroups: function(){
            return groups;
        },
        getUsers: function(){
            return users;
        },
        getMessages: function(id){

        }
    };
  });
