/**
 * Created by as on 10.03.2016.
 */
var MapService = angular.module('WeatherApiService', [])
    .constant('URLS', {
        API: {
            //BASE: 'http://localhost:56743/api/',
            //BASE: 'http://localhost:61773/api/',
            BASE: 'http://api.openweathermap.org/data/2.5/',
            KEY: 'appid=f73ce0c330cd3e695ea471999a81155c',
            ICONS: 'http://openweathermap.org/img/w/'
        }
    })
    .service('WeatherApi', ['$http', 'URLS', function ($http,URLS) {
        var srv = this;
        srv.getWeatherByCity = function(city) {
            return $http.get(URLS.API.BASE+'weather?q='+city+'&'+URLS.API.KEY)
        }
        srv.getWeatherByLocation = function(lat,lon) {
            return $http.get(URLS.API.BASE+'weather?lat='+lat+'&'+'lon='+lon+'&'+URLS.API.KEY)
        }
        srv.getWeatherByPostCode = function(postCode) {
            return $http.get(URLS.API.BASE+'weather?zip='+postCode+',us&'+URLS.API.KEY)
        }
        srv.getWeatherStateIcon = function(icon) {
            return $http.get(URLS.API.ICONS+icon+'.png');
        }
    }]);