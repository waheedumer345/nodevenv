// script.js
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.30715564295672, lng: 54.56848153790272 },
        zoom: 15,
    });
    const marker = new google.maps.Marker({
        position: { lat: 24.30715564295672, lng: 54.56848153790272 },
        map: map,
        title: "Red Touch GTC",
    });
}
