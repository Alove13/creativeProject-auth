angular.module("musicApp",["firebase"])
.controller("musicCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
 var ref = firebase.database().ref().child("venue")
  $scope.listVenues = $firebaseArray(ref)

  $scope.addVenue = function(venue) {
    var newVenue = {name: venue.name || "Unknown Name", phone: venue.phone || "No Number", imgUrl: venue.imgUrl || "http://cdn.osxdaily.com/wp-content/uploads/2014/07/users-and-groups-icon-mac.png"};
    console.log(newVenue);
    $scope.listVenues.$add(newVenue);
    venue.name = ""
    venue.phone = ""
    venue.imgUrl = ""
  }


 var ref = firebase.database().ref().child("artist")
  $scope.listArtists = $firebaseArray(ref)

  $scope.addArtist = function(artist) {
    var newArtist = {name: artist.name || "Unknown Name", genre: artist.genre || "Undeclared Genre", imgUrl: artist.imgUrl || "http://www.stockdesigns.com/Display.aspx?type=t&file=Musician_stic_figure_5_Actual.jpg"};
    console.log(newArtist);
    $scope.listArtists.$add(newArtist);
    artist.name = ""
    artist.genre = ""
    artist.imgUrl = ""
  }


}]);
