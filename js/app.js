// La funcionalidad de tu proyecto


function initMap() {
    var uluru = {lat: -12.0253234, lng: -77.1194875};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
      
