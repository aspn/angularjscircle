var app = angular.module('app', []);
  app.controller("MyController", function($scope){
    $scope.user = {
      diameter: 100,
      left: 150,
      top: 150,
      style: {}
    };

    $scope.calcStyle = function(user) {
      user.style = {'width': user.diameter + 'px', 'height': user.diameter + 'px', 'left': user.left + 'px', 'top': user.top + 'px' }
    };

    $scope.style = function(user) {
        return user.style;
    }

  });