//Note: You do NOT need to create an external JS file for this project despite any instructions you may see in Canvas. This file, app.js, is the only external JS file you need.



// Create map
const myMap = L.map("mapId",{
    center:[48.868672, 2.342130],
    zoom:12,
})



// Add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom:'15'
}).addTo(myMap);


//Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions


// Create and add a geolocation marker
const marker = L.marker([48.87007, 2.346453]);
marker.addTo(myMap).bindPopup('<P><b>The Hoxton, Paris</b></P>').openPopup()


// Draw the 2nd arrondissement     
const latlngs =[                    
[48.863368120198004, 2.3509079846928516],
[48.86933262048345, 2.3542531602919805],
[48.87199261164275, 2.3400569901592183],
[48.86993336274516, 2.3280142476578813] ,
[48.86834104280146, 2.330308418109664]
]

const polygon = L.polygon(latlngs, {
    color:"blue",
    fill: false
}).addTo(myMap)


// Create red pin marker
const redPin =L.icon({
    iconUrl:'./assets/red-pin.png',
    iconSize:[38,38],
    iconAnchor:[19,38],
})

// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453],{icon:redPin}).bindPopup('RÃ©aumur-SÃ©bastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196],{icon:redPin}).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739],{icon:redPin}).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167],{icon:redPin}).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543],{icon:redPin}).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714],{icon:redPin}).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)



