/*
SAMPLE URL
https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1Ijoic3RldmVncmlmZml0aCIsImEiOiJja2pnamd1dHoyaDdvMnNuMG5mMmlieXdvIn0.KbiXqVd8ymvPhxBY-FzTTw
base/style/static/lon,lat,zoom,bearing,pitch,size?access_token=token

Reference for MapBox static map images
https://docs.mapbox.com/api/maps/static-images/

Available styles
// streets-v11, outdoors-v11, light-v10, dark-v10, satellite-v9
*/

const GEO = null;
//TODO: create your own module that uses navigator.geolocation
// and import it

const APP = {
  baseURL: 'https://api.mapbox.com/styles/v1/mapbox',
  style: 'streets-v11', //matches HTML
  lon: -122.4241,
  lat: 37.78,
  zoom: 10, //matches HTML
  bearing: 0,
  pitch: 60, //matches HTML
  size: '1000x600',
  //TODO: replace this token with one of your own
  token:
    'pk.eyJ1Ijoic3RldmVncmlmZml0aCIsImEiOiJja2pnamd1dHoyaDdvMnNuMG5mMmlieXdvIn0.KbiXqVd8ymvPhxBY-FzTTw',
  init() {
    APP.addListeners();
    //initial load with default image
    APP.loadMap();
  },
  addListeners() {
    //zoom listener
    document.getElementById('zoom').addEventListener('change', APP.setZoom);
    //style listener
    document.getElementById('style').addEventListener('change', APP.setStyle);
    //pitch listener
    //TODO:
    //geolocation listener
    document.body.addEventListener('click', APP.getPosition);
    //TODO:
    //image load and error listener
    let img = document.getElementById('map');
    img.addEventListener('load', (ev) => {
      img.alt = `Map image for ${APP.lat}, ${APP.lon}`;
    });
    img.addEventListener('error', (err) => {
      img.alt = `Failed to load map image. ${err.message}`;
    });
  },
  setZoom(ev) {
    let select = ev.target;
    APP.zoom = select.value;
    APP.loadMap();
  },
  setStyle(ev) {
    let select = ev.target;
    APP.style = select.value;
    APP.loadMap();
  },
  getPosition() {
    //use the imported GEO object
    //TODO:
    //to fetch the current position and
    //call loadMap with new position
  },
  loadMap(pos) {
    if (pos) {
      APP.lon = pos.coords.longitude;
      APP.lat = pos.coords.latitude;
    } else {
      let pos = {
        coords: {
          latitude: APP.lat,
          longitude: APP.lon,
        },
      };
    }
    let url = `${APP.baseURL}/${APP.style}/static/${APP.lon},${APP.lat},${APP.zoom},${APP.bearing},${APP.pitch}/${APP.size}?access_token=${APP.token}`;
    let img = document.getElementById('map');
    img.alt = 'loading new map image';
    img.src = url;
  },
  //TODO: add a geolocation error failure
};

document.addEventListener('DOMContentLoaded', APP.init);