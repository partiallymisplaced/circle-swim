import React, { Component } from 'react';

class Map extends Component {

  // initMap() {
  //
  //   let markers = [];
  //
  //   let styledMapType = new window.google.maps.StyledMapType([
  //     {
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#f5f5f5"
  //         }
  //       ]
  //     }, {
  //       "elementType": "labels.icon",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#616161"
  //         }
  //       ]
  //     }, {
  //       "elementType": "labels.text.stroke",
  //       "stylers": [
  //         {
  //           "color": "#f5f5f5"
  //         }
  //       ]
  //     }, {
  //       "featureType": "administrative.land_parcel",
  //       "elementType": "labels",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "featureType": "administrative.land_parcel",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#bdbdbd"
  //         }
  //       ]
  //     }, {
  //       "featureType": "administrative.neighborhood",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#b5b5b5"
  //         }
  //       ]
  //     }, {
  //       "featureType": "administrative.neighborhood",
  //       "elementType": "labels.text.stroke",
  //       "stylers": [
  //         {
  //           "color": "#ffffff"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#eeeeee"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi",
  //       "elementType": "labels.text",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#757575"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi.business",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi.park",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#e5e5e5"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi.park",
  //       "elementType": "geometry.fill",
  //       "stylers": [
  //         {
  //           "color": "#d7eec1"
  //         }
  //       ]
  //     }, {
  //       "featureType": "poi.park",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#9e9e9e"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#ffffff"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.arterial",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#949494"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.highway",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#dadada"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.highway",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#616161"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.local",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.local",
  //       "elementType": "labels",
  //       "stylers": [
  //         {
  //           "visibility": "off"
  //         }
  //       ]
  //     }, {
  //       "featureType": "road.local",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#b5b5b5"
  //         }
  //       ]
  //     }, {
  //       "featureType": "transit.line",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#e5e5e5"
  //         }
  //       ]
  //     }, {
  //       "featureType": "transit.station",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#eeeeee"
  //         }
  //       ]
  //     }, {
  //       "featureType": "water",
  //       "elementType": "geometry",
  //       "stylers": [
  //         {
  //           "color": "#c9c9c9"
  //         }
  //       ]
  //     }, {
  //       "featureType": "water",
  //       "elementType": "geometry.fill",
  //       "stylers": [
  //         {
  //           "color": "#c4ddec"
  //         }
  //       ]
  //     }, {
  //       "featureType": "water",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //         {
  //           "color": "#9e9e9e"
  //         }
  //       ]
  //     }
  //   ], {name: 'Styled Map'});
  //
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     center: {
  //       lat: 47.608013,
  //       lng: -122.335167
  //     },
  //     zoom: 14,
  //     mapTypeControlOptions: {
  //       mapTypeIds: ['styled_map']
  //     }
  //   });
  //
  //   map.mapTypes.set('styled_map', styledMapType);
  //   map.setMapTypeId('styled_map');
  //
  //
  //   let locations = [
  //     {title: 'Queen Anne Pool', location: {lat: 47.63626287, lng: -122.35795027}},
  //     {title: 'Medgar Evers Pool', location: {lat: 47.6068876, lng: -122.30240183}},
  //     {title: 'Rainier Beach Pool', location: {lat: 47.52476642, lng: -122.27033751}},
  //     {title: 'Southwest Pool', location: {lat: 47.52800132, lng: -122.36916224}},
  //     {title: 'Ballard Pool', location: {lat: 47.67754026, lng: -122.37616194}},
  //   ]
  //
  //   for (let location of locations) {
  //     let position = location;
  //     // let title = title;
  //     let marker = new window.google.maps.Marker({
  //       map: map,
  //       position: position,
  //       // title: title,
  //       animation: window.google.maps.Animation.DROP,
  //     });
  //     markers.push(marker);
  //   }
  //
  //   // for (var i = 0; i < locations.length; i++) {
  //   //      // Get the position from the location array.
  //   //      var position = locations[i].location;
  //   //      var title = locations[i].title;
  //   //      // Create a marker per location, and put into markers array.
  //   //       var marker = new window.google.maps.Marker({
  //   //        position: position,
  //   //        title: title,
  //   //        animation: window.google.maps.Animation.DROP,
  //   //        id: i
  //   //      });
  //   // }
  //   // markers.push(marker);
  //
  //   // function displayPools() {
  //   //   var bounds = new window.google.maps.LatLngBounds();
  //   //      // Extend the boundaries of the map for each marker and display the marker
  //   //      for (var i = 0; i < markers.length; i++) {
  //   //        markers[i].setMap(map);
  //   //        bounds.extend(markers[i].position);
  //   //      }
  //   //      map.fitBounds(bounds);
  //   //    }
  //
  //   function displayPools() {
  //     let bounds = new window.google.maps.LatLngBounds();
  //     for (let marker of markers) {
  //       marker.setMap(map);
  //       bounds.extend(marker.position);
  //     }
  //     map.fitBounds(bounds);
  //   }
  //   //
  //   // // Individual marker test
  //   // // let queenAnne = {lat: 47.63626287, lng: -122.35795027}
  //   // // let marker = new window.google.maps.Marker({
  //   // //   position: queenAnne,
  //   // //   map: map,
  //   // //   animation: window.google.maps.Animation.DROP,
  //   // //   title: 'Queen Anne Pool',
  //   // // })
  //   // // let infowindow = new window.google.maps.InfoWindow({
  //   // //   content: 'Queen Anne Pool',
  //   // // })
  //   // // marker.addListener('click', () => infowindow.open(map, marker));
  //   //
  //
  //   displayPools();
  //
  // }
  //
  // componentDidMount() {
  //   this.initMap();
  // }

  render() {
    // let locations = this.props.poolList;
    // console.log(locations[0].address);
    return (
      <div id="map" className="pools-map">
        <p>There be a map.</p>
      </div>
    )
  }
}

export default Map;
