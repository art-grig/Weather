/**
 * Created by as on 07.03.2016.
 */
var MapService = angular.module('MapService', [])
    .service('Map', function () {
        var srv = this;
        srv.MAP_OPTIONS = {};
        srv.initMapOptions = function (currentLocation) {
            srv.MAP_OPTIONS = {
                center: currentLocation,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                draggable: true
            };
        }
        srv.getCurrentPosition = function(success,error) {
            return navigator.geolocation.getCurrentPosition(success,error);
        }
        srv.init = function (mapId) {
            console.log(srv.MAP_OPTIONS);
            return new google.maps.Map(document.getElementById(mapId), srv.MAP_OPTIONS)
        }
    });