var map;
var markers = [];


function go() {
  for (var i = 0; i < position.length; i++) {
    addMarker(i);
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {
      lat: 25.0336962,
      lng: 121.5643673
    }
  });
  go();
}

function addMarker(e) {
  const infowindow = new google.maps.InfoWindow({
    content: 'test123',
  });
  const marker = new google.maps.Marker({
    position: {
      lat: position[e].lat,
      lng: position[e].lng
    },
    map: this.map,
    icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10
        },
    });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map: this.map,
      shouldFocus: false,
    });
  });
}

var position = [
  {label:'A', lat:25.0336962, lng:121.5643673},
  {label:'B', lat:25.0333698, lng:121.5641564},
  {label:'C', lat:25.033899, lng:121.564329},
  {label:'D', lat:25.0338407, lng:121.5645269},
  {label:'E', lat:25.0336377, lng:121.5645727}
];


