'use strict';

angular.module('exel.main', ['ngRoute'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('main', {
            url:'/',
            templateUrl: 'main/main.html',
            controller: 'MainPageController'
        })
}])

.controller('MainPageController', ['$scope', '$http', '$animate', 'newsService', function($scope, $http, $animate, newsService) {
$http.get('main/slides.json').success(function(data) {
      $scope.slides = data;

      var i, a = [], b;

      for (i = 0; i < $scope.slides.length; i += 6) {
        b = { image1: $scope.slides[i] };

        if ($scope.slides[i + 5]) {
          b.image2 = $scope.slides[i + 1];
          b.image3 = $scope.slides[i + 2];
          b.image4 = $scope.slides[i + 3];
          b.image5 = $scope.slides[i + 4];
          b.image6 = $scope.slides[i + 5];
        }

        a.push(b);
      }

      $scope.groupedSlides = a;


});
$animate.enabled(false);
$scope.myInterval = 6000;

newsService.getNews().then(function(data){
  $scope.news = data.reverse();
  if ($scope.news.length > 4) {
    $scope.news = $scope.news.splice(0, 4);
  }
  $scope.mainArticle = $scope.news.splice(0, 1)[0];

})



}]);