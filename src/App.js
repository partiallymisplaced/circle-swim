import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import PoolList from './PoolList';
import Map from './Map';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poolList: []
    };
  }

  // initMap() {
  //   let map = new window.google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //   });
  // }

  // initMap() {
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
  //   let queenAnne = {lat: 47.63626287, lng: -122.35795027}
  //   let marker = new window.google.maps.Marker({
  //     position: queenAnne,
  //     map: map,
  //     animation: window.google.maps.Animation.DROP,
  //     title: 'Queen Anne Pool',
  //   })
  //
  //   map.mapTypes.set('styled_map', styledMapType);
  //   map.setMapTypeId('styled_map');
  //
  // }

  getPoolData() {
    fetch('https://data.seattle.gov/resource/ppq2-qxkx', {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        "app_token": "XYEEYf573j7hRlczkT6WSAZKK"
      }
    }).then(response => response.json()).then(data => this.setState({poolList: data}));
  }

  componentDidMount() {
    this.getPoolData();
    // this.initMap();
  }

  render() {
    return (<main>
      <PoolList poolList={this.state.poolList}/>
      <Map poolList={this.state.poolList}/>
    </main>);
  }
}

export default App;
