angular.module('userProfiles')
    .controller('MainController', function($scope, mainService) {

        $scope.thisAppIsBroken = mainService.message;
        $scope.users = mainService.getUsers();
        $scope.toggleFavorite = mainService.toggleFavorite;
    })
