

function initialize(){
      var mapOptions={
       center: new google.maps.LatLng(40.522305, -6.064228),
       zoom:16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"),
       mapOptions);
}

$( document ).ready(function() {
	initialize();
});