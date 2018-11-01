import React, {Component} from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      map: {},
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
      });
      marker.addListener('click', () => {
        this.addInfoWindowToInfoWindow(i)
        this.state.poolInfoWindow.open(this.state.map, marker);
      });
      
      markers.push(marker);
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
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 47.63626287,
        lng: -122.35795027
      },
      zoom: 12
    });
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
