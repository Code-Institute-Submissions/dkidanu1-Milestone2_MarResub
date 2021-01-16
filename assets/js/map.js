
function initMap() {
  // The location of Green Park
  const greenpark = { lat: -0.7171778, lng: 36.3960062 };
  // The map, centered at Green Park
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: greenpark,
  });
  // The marker, positioned at Green Park
  const marker = new google.maps.Marker({
    position: greenpark,
    map: map,
  });
}