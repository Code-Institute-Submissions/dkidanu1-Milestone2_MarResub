

//Home Page Map of the location of Green Park
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

//Activity Page Map 

function initMap1() {
  // The map, centered at Green Park
    const map1 = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {lat: -0.7171778, lng: 36.3960062},
  });
   //Array of characters to label markers
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
   // Markers on Activity Locations
    const markers1 = locations.map((location,i)=> {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
  });

  // Market Clusterer
  new MarkerClusterer(map1, markers1,
    {
        imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
const locations=[
    { lat: -0.7393086, lng: 36.3212225 }, //Crescent Island Game Sanctuary
    { lat: -0.7524088, lng: 36.2839375},  // Lake Naivasha National Park
    { lat: -0.7416331, lng: 36.4307347},  // Lake Naivasha Hippo Camp & Wildlife Sanctuary  
    { lat: -0.770798, lng: 36.4281424},  // Enashipai Resort & Spa
    { lat: -0.7834656, lng: 36.2576562},  // Crater Lake Tented Camp And Game Sanctuary
];
  

