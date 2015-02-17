'use strict';

angular.module('exel.services', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('services', {
            url:'/services',
            templateUrl: 'services/services.html',
            controller: 'ServicesController'
        })
        .state('services.detail', {
            url: '/detail/:id',
            templateUrl: 'services/detail.html',
            controller: 'ServicesDetailController'
        });
}])

.controller('ServicesController', ['$scope', "$http", function($scope, $http) {


$http.get('services/services.json').success(function(data) {
    $scope.services = data;
});

$(document).on('click', '.cat > .list-group-item', function(event) {
        var actives = $(document).find('.collapse.in');
        if (actives) {
            actives.collapse('hide');
        }
})




}])

.controller('ServicesDetailController', ['$scope', '$animate', '$stateParams',  "$http", '$modal', function($scope, $animate, $stateParams, $http, $modal) {


$http.get('services/cats/'+ $stateParams.id +'.json').success(function(data) {
    $scope.service = data;
    $scope.slides = $scope.service.imagesUrl        

});
$animate.enabled(false);
$scope.myInterval = 4000;

$scope.modal = function (state) {

    var modalInstance = $modal.open({
      templateUrl: 'services/myModalContent.html',
      controller: 'ModalInstanceCtrl2',
      size: 'md',
      resolve: {
        
      }
    })
  };

}])
.controller('ModalInstanceCtrl2', function ($scope, $modalInstance) {

});