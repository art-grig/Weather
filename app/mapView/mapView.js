'use strict';

angular.module('myApp.mapView', ['ngRoute','MapService','WeatherApiService'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/mapView', {
        templateUrl: 'mapView/mapView.html',
        controller: 'MapCtrl'
    });
}])
.controller('MapCtrl', ['$scope','Map','WeatherApi','$location', function($scope, Map, WeatherApi,$location) {
    $scope.lat = {};
    $scope.lng = {};
    $scope.weather = {};
    var OnGetWeatherByLocationSuccess = function(response){
        $scope.weather = response.data.weather[0];
        $scope.main = response.data.main;
        console.log('byLocation: ');
        console.log($scope.weather);
        console.log($scope.main);
        var latLng = new google.maps.LatLng($scope.lat, $scope.lng);
        var content = document.createElement('div');
        content.innerHTML = ["<ul>",
            "<li>"+'temperature: '+$scope.main.temp+"</li>",
            "<li>"+'overall: '+$scope.weather.description+"</li>",
            "<li>"+'pressure: '+$scope.main.pressure+"</li>",
            "</ul>"].join("");
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        var marker = new google.maps.Marker({
            position: latLng,
            map: $scope.map,
            icon: 'http://openweathermap.org/img/w/'+$scope.weather.icon+'.png',
            iw: infowindow
        });
        google.maps.event.addListener(marker, 'click', function() {
            this.iw.open($scope.map, this);
        });
    }
    var OnGetCurrentPositionSuccess = function(loc){
        $scope.lat = loc.coords.latitude;
        $scope.lng = loc.coords.longitude;
        Map.initMapOptions(new google.maps.LatLng($scope.lat, $scope.lng));
        $scope.map = Map.init('map');
        WeatherApi.getWeatherByLocation($scope.lat,$scope.lng).then(OnGetWeatherByLocationSuccess);
    }
    var OnGetCurrentPositionError = function(error){
        console.log('error');
        $location.path('/postcodeView');
    }
    Map.getCurrentPosition(OnGetCurrentPositionSuccess,OnGetCurrentPositionError);
    WeatherApi.getWeatherByCity('London').then(function(response){
        console.log('byCity: ');
        console.log(response);
    });
    console.log(WeatherApi.getWeatherByPostCode('London'));
}]);