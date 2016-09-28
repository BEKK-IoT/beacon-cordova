import {firebase} from 'devices-core-firebase';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const estimoteUUID = "B9407F30-F5F8-466E-AFF9-25556B57FE6D";

// Dictionary of found beacons.
let beacons = {};

let app = {
    inBackground: false,
    notificationID: 0,
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // Background detection.

    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', function() { app.inBackground = true });
        document.addEventListener('resume', function() { app.inBackground = false });
    },

    onDeviceReady: function() {
        console.log('deviceready');
        // Start ranging beacons!
        app.startMonitoring();
    },

    startMonitoring: function() {
    		var delegate = new cordova.plugins.locationManager.Delegate();

        // Called when starting to monitor a region.
        // (Not used in this example, included as a reference.)
        delegate.didStartMonitoringForRegion = function(pluginResult){
          console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult))
        };

        delegate.didDetermineStateForRegion = function(result){
          if (app.inBackground){
            if (result.region.typeName == 'BeaconRegion' &&
              result.state == 'CLRegionStateInside'){
              cordova.plugins.notification.local.schedule({
                  id: ++app.notificationID,
                  title: 'Beacon in range',
                  text: 'Detected a beacon, tap here to open app.'
                });
            }
          }
        };

    		cordova.plugins.locationManager.setDelegate(delegate);

    		// This is needed on iOS 8.
    		cordova.plugins.locationManager.requestAlwaysAuthorization();

        var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
          'identifier',
          estimoteUUID);

        // Start monitoring.
  			cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
  				.fail(console.error)
  				.done();
    }
};

app.initialize();
