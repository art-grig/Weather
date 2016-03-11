'use strict';

angular.module('myApp.postcodeView', ['ngRoute','WeatherApiService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/postcodeView', {
    templateUrl: 'postcodeView/postcodeView.html',
    controller: 'PostcodeCtrl'
  });
}])

.controller('PostcodeCtrl', [ '$scope', 'WeatherApi', function($scope,WeatherApi) {
    $scope.data = {};
    $scope.data.postcode = '';
    $scope.refresh = function() {
        console.log('refresh');
        WeatherApi.getWeatherByPostCode($scope.data.postcode).then(function(response){
            console.log(response);
            if (response.data.cod == '404') {
                alert('wrong postcode');
                return;
            }
            $scope.temp = response.data.main.temp;
            $scope.pressure = response.data.main.pressure;
            $scope.description = response.data.weather[0].description;
        });
    }
}]);