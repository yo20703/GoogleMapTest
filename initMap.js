var map;
var markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {
      lat: 25.0336962,
      lng: 121.5643673
    }
  });
}

function go() {
  for (var i = 0; i < 5; i++) {
    addMarker(i);
  }
}

function addMarker(e) {
  setTimeout(function() {
    let infowindow = new google.maps.InfoWindow({
      content: 'test123' 
    });

    markers.push(new google.maps.Marker({
      position: {
        lat: position[e].lat,
        lng: position[e].lng
      },

      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      },
      draggable: false,
      //label: position[e].label,
    }).addListener("click", e => {
      infowindow.open({
        anchor: this,
        map,
        shouldFocus: false,
      });
    }));
  }, e * 150);
}

go();


var position = [
  {label:'A', lat:25.0336962, lng:121.5643673},
  {label:'B', lat:25.0333698, lng:121.5641564},
  {label:'C', lat:25.033899, lng:121.564329},
  {label:'D', lat:25.0338407, lng:121.5645269},
  {label:'E', lat:25.0336377, lng:121.5645727}
];


