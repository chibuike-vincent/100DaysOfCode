/* Day 10 of 100DaysOfCode.
Today am going to use function to actualize a little advance task of generating the latitude and longitude of a particular address provided by a user*/

// We are going to making use of a method called Geocoder() helps us manipulate the google map to achieve this.

// We need a google api for this so we are going to provide this link "https://maps.googleapis.com/maps/api/js?sensor=false" in our html file as a script.

/* This displayResult function is used as the callback function . It is used to target the two input field provided in the HTML file by calling their IDs*/

function displayResult(result) {
  // in this function we have one argument "result" as we saw in the beginning.
  document.getElementById('lat').value = result.geometry.location.lat();
  document.getElementById('long').value = result.geometry.location.lng();
}

function getLatLong(callback, address) {
  // in this function we have two argument "callback" and "address" as we also saw in the beginning.
  // If adress is not supplied, use default value is 'Nigeria'
  address = address || 'Nigeria';
  // Initialize the Geocoder
  geocoder = new google.maps.Geocoder();
  if (geocoder) {
      geocoder.geocode({
          'address': address
      }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              callback(results[0]);
          }
      });
  }
}

let button = document.getElementById('btn');

button.addEventListener("click", function () {
  let address = document.getElementById('address').value;
  getLatLong(displayResult, address)
});