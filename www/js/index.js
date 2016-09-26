import {firebase} from 'devices-core-firebase';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const estimoteUUID = "B9407F30-F5F8-466E-AFF9-25556B57FE6D";

// Dictionary of found beacons.
let beacons = {};

let app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('deviceready');

        // Start ranging beacons!
        app.startRanging();

        // Display beacons in range.
        setInterval(app.displayBeaconList, 500);
    },

    startRanging: function() {
    		var delegate = new cordova.plugins.locationManager.Delegate();

    		// Called continuously when ranging beacons.
    		delegate.didRangeBeaconsInRegion = function(result){
    			for (var i in result.beacons){
    				// Insert beacon into table of found beacons.
    				var beacon = result.beacons[i];
    				beacon.timeStamp = Date.now();

            // Update or insert the unique beacon in the directory
            var key = beacon.uuid + ':' + beacon.major + ':' + beacon.minor;
    				beacons[key] = beacon;
    			}
    		};

    		// Set the delegate object to use.
    		cordova.plugins.locationManager.setDelegate(delegate);

    		// This is needed on iOS 8.
    		cordova.plugins.locationManager.requestAlwaysAuthorization();


        var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
          'identifier',
          estimoteUUID);

  			// Start ranging.
  			cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
  				.fail(console.error)
  				.done();
    },

    displayBeaconList: function(){
      // Clear beacon view list.
      $('#beacons').empty();

      var timeNow = Date.now();

      // Update beacon list.
      $.each(beacons, function(key, beacon){
        // Only show beacons that are updated during the last 60 seconds.
        if (beacon.timeStamp + 60000 > timeNow){

          // Create tag to display beacon data.
          var element = $(
            '<li>'
            +	'Major: ' + beacon.major + '<br />'
            +	'Minor: ' + beacon.minor + '<br />'
            +	'Proximity: ' + beacon.proximity + '<br />'
            + '</li>'
          );

          //append beacon view list
          $('#beacons').append(element);
        }
      });
  }
};

app.initialize();
