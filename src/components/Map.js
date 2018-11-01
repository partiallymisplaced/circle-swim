import React, {Component} from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      map: {},
      bounds: new window.google.maps.LatLngBounds(),
      poolInfoWindow: new window.google.maps.InfoWindow(),
      clickedPoolId: null,
    };
  }

  triggerPoolInfoWindow(){
    for (let i = 0; i < this.state.markers.length; i++){
      if (this.state.markers[i].id === this.props.clickedPoolId){
        new window.google.maps.event.trigger(this.state.markers[i], 'click');
      }
    }
  }

  addInfoWindowToInfoWindow(i) {
    this.state.poolInfoWindow.setContent(
      `<p class="pool-name">${this.props.poolList[i].name}</p> 
         <p>${this.props.poolList[i].address}</p>
         <p>${this.props.poolList[i].phone}</p>
         <p class="pool-type">${this.props.poolList[i].indoor_out}</p>`
    );
  }

  generateMarkersArray() {
    let markers = [];
    for (let i = 0; i < this.props.poolList.length; i++) {
      let marker = new window.google.maps.Marker({
        id: this.props.poolList[i].pmaid,
        animation: window.google.maps.Animation.DROP,
        position: {
          lat: parseFloat(this.props.poolList[i].latitude),
          lng: parseFloat(this.props.poolList[i].longitude)
        },
        icon: {
          url: 'https://raw.githubusercontent.com/partiallymisplaced/circle-swim/master/src/cs-map-marker.png',
        },

      });
      marker.addListener('click', () => {
        this.addInfoWindowToInfoWindow(i)
        this.state.poolInfoWindow.open(this.state.map, marker);
      });
      markers.push(marker);
      this.state.bounds.extend(markers[i].position);
    }
    this.setState({ markers });
  }

  addMarkersToMap() {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(this.state.map);
    }
  }

  clearMarkersFromMap() {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(null);
    }
  }

  initMap() {
    let styledMapType = new window.google.maps.StyledMapType([
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      }, {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b5b5b5"
          }
        ]
      }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      }, {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d7eec1"
          }
        ]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#949494"
          }
        ]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      }, {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b5b5b5"
          }
        ]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#c4ddec"
          }
        ]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ], {name: 'Styled Map'});

    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 47.63626287,
        lng: -122.35795027
      },
      zoom: 12,
      mapTypeControlOptions: {
        mapTypeIds: ['styled_map']
      }
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    map.fitBounds(this.state.bounds);
    return map;
  }

  async componentDidMount() {
    let map = this.initMap();
    await this.setState({ map });
    await this.generateMarkersArray();
    await this.addMarkersToMap();

  }

  async componentDidUpdate(prevProps) {
    if (prevProps.poolList !== this.props.poolList) {
      await this.clearMarkersFromMap();
      await this.generateMarkersArray();
      await this.addMarkersToMap();
    }
    await this.triggerPoolInfoWindow();
  }

  render() {    
    return (
      <div id="map" className="pool-map"></div>
    );
  }
}

export default Map;
