'use strict';

describe('myApp.mapView module', function() {

  beforeEach(module('myApp.mapView'));

  describe('mapView controller', function(){

    it('should ....', inject(function($controller,$rootScope) {
      //spec body
      var $scope = $rootScope.$new(),
          ctrl = $controller('MapCtrl', {
            $scope: $scope

          });
      var mapCtrl = $controller('MapCtrl');
      expect(mapCtrl).toBeDefined();
    }));

  });
});