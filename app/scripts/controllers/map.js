'use strict';

/**
 * @ngdoc function
 * @name courierApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the courierApp
 */
angular.module('courierApp')
  .controller('MapCtrl', function () {
    /*
    // Get From Database
    $scope.Providers = function GetProviders() {

    };
    $scope.Providers = [{fullname:'Name 1', Rating:'3', lat:5656, long:1554, suburb:S1},
                        {fullname:'Name 2', Rating:'3', lat:5356, long:1534, suburb:S2},
                        {fullname:'Name 3', Rating:'3', lat:5676, long:1254, suburb:S3}];
    */

    this.map = {
      center: {
        latitude: 39.5925511,
        longitude: 2.633202
      },
      zoom: 16,
      markers: [{
        id: 1,
        latitude: 39.5924115,
        longitude: 2.6468146

      }, {
        id: 2,
        latitude: 39.5925511,
        longitude: 2.633202
      }],
      markersEvents: {
        click: function(marker, eventName, model) {
          console.log('Click marker');
          $scope.map.window.model = model;
          $scope.map.window.show = true;
        }
      },
      window: {
        marker: {},
        show: false,
        closeClick: function() {
          this.show = false;
        },
        options: {} 
      }
    };
    uiGmapGoogleMapApi.then(function (maps) {
        // offset to fit the custom icon
        //$scope.map.window.options.pixelOffset = new google.maps.Size(0, -35, 'px', 'px');
    });    
  });
