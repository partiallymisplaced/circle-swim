import React, {Component} from 'react';
// import Markers from './Markers';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolList: this.props.poolList
    };

    // let markers = this.state.poolList;
  }
  
  
  addMarkers() {
    let markers = this.props.poolList;
    console.log("markers are", markers);
    for (let i = 0; i < markers.length; i++) {
      let marker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(markers[i].latitude),
          lng: parseFloat(markers[i].longitude)
        },
        map: this.state.map,
        id: i
      });
      // markersArr.push(marker)
      marker.setMap(this.state.map);
    }

    // console.log(markersArr, 'MA')
  }

  clearMarkers(poolList = this.state.poolList) {
    console.log('clearing');

  }



  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 47.63626287,
        lng: -122.35795027
      },
      zoom: 13
    });
    console.log("The map gets rendered.");
    return map;
  }

  componentDidMount() {
    // console.log(this.props);
    let map = this.initMap();
    this.setState({
      map: map
    });
    this.addMarkers();
  }

  
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Component Did Update");
  //   console.log("prev props", prevProps);
  //   console.log("prev state", prevState);
  //   if (prevProps !== prevState) {
  //     console.log("Props should change");
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("Component Got Derived State From Props - prev state available to compare");
  //   console.log("next props: ", nextProps);
  //   console.log("prev state:", prevState);
  //   if (nextProps !== prevState) {
  //     console.log("State should change")
  //   }
  //   return nextProps;
  // }
  
  render() {
    return (
      <div id="map" className="pool-map">
        {this.addMarkers()}
        {/* {console.log("map state", this.state.poolList)}
        {console.log("map props", this.props.poolList)} */}
      </div>
    );
  }
}
export default Map;
