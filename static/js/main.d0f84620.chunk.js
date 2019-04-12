(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,o,t){e.exports=t(21)},15:function(e,o,t){},17:function(e,o,t){},21:function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),i=t(9),r=t.n(i),l=(t(15),t(1)),s=t(2),d=t(4),p=t(3),c=t(5);var u=function(){return a.a.createElement("div",{className:"error-message"},"Data could not be shown at this time. Please come back later!")},m=(t(17),function(e){function o(){var e,t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(p.a)(o)).call.apply(e,[this].concat(a)))).handleClick=function(){return t.props.getClickedPoolId(t.props.pool.pmaid)},t}return Object(c.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",{className:"pool-name",onClick:this.handleClick},this.props.pool.name),a.a.createElement("p",{className:"pool-type"},this.props.pool.indoor_out))}}]),o}(n.Component)),f=function(e){function o(){var e,t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(p.a)(o)).call.apply(e,[this].concat(a)))).state={hasError:!1},t}return Object(c.a)(o,e),Object(s.a)(o,[{key:"componentDidCatch",value:function(e,o){console.log(e,o),console.log("caught an error")}},{key:"render",value:function(){var e=this;return a.a.createElement("aside",null,a.a.createElement("label",{htmlFor:"select-pool-type"},"Pool Type:"),a.a.createElement("select",{id:"select-pool-type",name:"select-pool-type",tabIndex:"1",onChange:function(o){return e.props.handleChange(e.props.pool,o.target.value)}},a.a.createElement("option",{value:"Any"},"Any"),a.a.createElement("option",{value:"Indoor"},"Indoor"),a.a.createElement("option",{value:"Outdoor"},"Outdoor")),a.a.createElement("div",null,a.a.createElement("ol",null,this.props.poolList.map(function(o){return a.a.createElement("li",{key:o.pmaid,className:"pool-list-item",tabIndex:"1"},a.a.createElement(m,{pool:o,getClickedPoolId:e.props.getClickedPoolId}))}))),a.a.createElement("footer",null,a.a.createElement("p",null,"Pool info provided by the"),a.a.createElement("a",{href:"https://dev.socrata.com/foundry/data.seattle.gov/ppq2-qxkx",target:"_blank",rel:"noopener noreferrer"},"City of Seattle Open Data API")))}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),o}(n.Component),y=t(6),h=t.n(y),_=t(7),g=function(e){function o(e){var t;return Object(l.a)(this,o),(t=Object(d.a)(this,Object(p.a)(o).call(this,e))).setBounds=function(){t.setState({bounds:new window.google.maps.LatLngBounds})},t.setPoolInfoWindow=function(){t.setState({poolInfoWindow:new window.google.maps.InfoWindow})},t.state={markers:[],map:{},bounds:null,poolInfoWindow:null,clickedPoolId:null},t}var t,n;return Object(c.a)(o,e),Object(s.a)(o,[{key:"triggerPoolInfoWindow",value:function(){for(var e=this,o=function(o){e.state.markers[o].id===e.props.clickedPoolId&&(new window.google.maps.event.trigger(e.state.markers[o],"click"),e.state.markers[o].setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){e.state.markers[o].setAnimation(null)},800))},t=0;t<this.state.markers.length;t++)o(t)}},{key:"addInfoWindowToInfoWindow",value:function(e){this.state.poolInfoWindow.setContent('<p class="pool-name">'.concat(this.props.poolList[e].name,"</p> \n         <p>").concat(this.props.poolList[e].address,"</p>\n         <p>").concat(this.props.poolList[e].phone,'</p>\n         <p class="pool-type">').concat(this.props.poolList[e].indoor_out,"</p>"))}},{key:"generateMarkersArray",value:function(){for(var e=this,o=[],t=function(t){var n=new window.google.maps.Marker({id:e.props.poolList[t].pmaid,animation:window.google.maps.Animation.DROP,position:{lat:parseFloat(e.props.poolList[t].latitude),lng:parseFloat(e.props.poolList[t].longitude)},icon:{url:"https://raw.githubusercontent.com/partiallymisplaced/circle-swim/master/src/cs-map-marker.png"}});n.addListener("click",function(){e.addInfoWindowToInfoWindow(t),e.state.poolInfoWindow.open(e.state.map,n)}),o.push(n),e.state.bounds.extend(o[t].position)},n=0;n<this.props.poolList.length;n++)t(n);this.setState({markers:o})}},{key:"addMarkersToMap",value:function(){for(var e=0;e<this.state.markers.length;e++)this.state.markers[e].setMap(this.state.map)}},{key:"clearMarkersFromMap",value:function(){for(var e=0;e<this.state.markers.length;e++)this.state.markers[e].setMap(null)}},{key:"initMap",value:function(){var e=new window.google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#b5b5b5"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#d7eec1"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#949494"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#b5b5b5"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c4ddec"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],{name:"Styled Map"}),o=new window.google.maps.Map(document.getElementById("map"),{center:{lat:47.63626287,lng:-122.35795027},zoom:12,mapTypeControlOptions:{mapTypeIds:["styled_map"]}});return o.mapTypes.set("styled_map",e),o.setMapTypeId("styled_map"),o.fitBounds(this.state.bounds),o}},{key:"componentDidMount",value:(n=Object(_.a)(h.a.mark(function e(){var o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.google){e.next=14;break}return e.next=3,this.setBounds();case 3:return o=this.initMap(),e.next=6,this.setState({map:o});case 6:return e.next=8,this.generateMarkersArray();case 8:return e.next=10,this.addMarkersToMap();case 10:return e.next=12,this.setPoolInfoWindow();case 12:e.next=15;break;case 14:this.props.setMapError();case 15:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"componentDidUpdate",value:(t=Object(_.a)(h.a.mark(function e(o){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.poolList===this.props.poolList){e.next=7;break}return e.next=3,this.clearMarkersFromMap();case 3:return e.next=5,this.generateMarkersArray();case 5:return e.next=7,this.addMarkersToMap();case 7:return e.next=9,this.triggerPoolInfoWindow();case 9:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement("div",{id:"map",className:"pool-map",role:"application"})}}]),o}(n.Component),P=function(e){function o(e){var t;return Object(l.a)(this,o),(t=Object(d.a)(this,Object(p.a)(o).call(this,e))).getClickedPoolId=function(e){t.setState({clickedPoolId:e})},t.setMapError=function(){t.setState({hasError:!0})},t.handleChange=function(e,o){t.setState({filteredPoolList:t.state.poolList.filter(function(e){return"Any"!==o?e.indoor_out===o:"Indoor"})})},t.state={poolList:[{address:"1920 1st Ave West",coordinato:"Janet Wilson",full_name:"Queen Anne Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.63626287",longitude:"-122.35795027",name:"Queen Anne Pool",official_n:"Queen Anne Pool",phone:"386-4282",pmaid:"337",point_x:"1264556.37500273",point_y:"235812.48453707",the_geom:{type:"Point",coordinates:[-122.35795026785668,47.63626286559663]}},{address:"500 23rd Ave",coordinato:"Kristen Schuler",full_name:"Medgar Evers Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.6068876",longitude:"-122.30240183",name:"Evers Pool",official_n:"Evers Memorial Pool",phone:"684-4766",pmaid:"353",point_x:"1278044.37492956",point_y:"224832.99993439",the_geom:{type:"Point",coordinates:[-122.30240182803597,47.606887600677034]}},{address:"8825 Rainier Ave S",coordinato:"Donna Sammons",full_name:"Rainier Beach Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.52476642",longitude:"-122.27033751",name:"Rainier Beach Pool",official_n:"Rainier Beach Pool",phone:"386-1944",pmaid:"434",point_x:"1285393.37499531",point_y:"194733.95317723",the_geom:{type:"Point",coordinates:[-122.27033751275907,47.524766415040474]}},{address:"2801 SW Thistle St",coordinato:"Nancy Eisner",full_name:"Southwest Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.52800132",longitude:"-122.36916224",name:"Southwest Pool",official_n:"Southwest Pool",phone:"233-7295",pmaid:"3996",point_x:"1261004.62488839",point_y:"196385.28123939",the_geom:{type:"Point",coordinates:[-122.36916224498255,47.52800132362959]}},{address:"1471 NW 67th Street",coordinato:"Angela Eddy",full_name:"Captain William R. Ballard Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.67754026",longitude:"-122.37616194",name:"Ballard Pool",official_n:"Ballard Pool",phone:"684-4094",pmaid:"498",point_x:"1260369.12517513",point_y:"250955.51560265",the_geom:{type:"Point",coordinates:[-122.376161943172,47.677540264436196]}},{address:"13401 Meridian Ave N",coordinato:"Peter Brodkin",full_name:"Helene Madison Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.72580143",longitude:"-122.3346563",name:"Madison Pool",official_n:"Helene Madison Memorial Pool",phone:"684-4979",pmaid:"285",point_x:"1270935.37503997",point_y:"268353.99983448",the_geom:{type:"Point",coordinates:[-122.33465629789156,47.72580143140825]}},{address:"8603 Fauntleroy Wy S",coordinato:"Steve Vela",full_name:"Laurence Colman Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Outdoor",latitude:"47.53045332",longitude:"-122.40097906",name:"Colman Pool",official_n:"Colman Pool",phone:"684-7494",pmaid:"460",point_x:"1253163.87482189",point_y:"197437.98451456",the_geom:{type:"Point",coordinates:[-122.40097906178957,47.53045331604131]}},{address:"7201 E GreenLk Dr N",coordinato:"Barb Marsh",full_name:"Evans Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.68018276",longitude:"-122.32843756",name:"Evans Pool",official_n:"Evans Pool",phone:"684-0881",pmaid:"307",point_x:"1272142.37492256",point_y:"251687.18736765",the_geom:{type:"Point",coordinates:[-122.3284375582711,47.68018276418633]}},{address:"10515 35th Ave NE",coordinato:"Scott Ferry",full_name:"Meadowbrook Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.70534163",longitude:"-122.29162385",name:"Meadowbrook Pool",official_n:"Meadowbrook Pool",phone:"684-4989",pmaid:"352",point_x:"1281383.1251418",point_y:"260688.6404933",the_geom:{type:"Point",coordinates:[-122.29162384952146,47.70534162689962]}},{address:"2535 32nd Ave West",coordinato:"Bill Dougherty",full_name:'Lowery C. "Pop" Mounger Pool',gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Outdoor",latitude:"47.64290025",longitude:"-122.3988701",name:"Mounger Pool",official_n:'Lowery C. "Pop" Mounger Pool',phone:"684-4078",pmaid:"4473",point_x:"1254519.12506413",point_y:"238435.60954015",the_geom:{type:"Point",coordinates:[-122.39887010304064,47.642900252830444]}}],filteredPoolList:[{address:"1920 1st Ave West",coordinato:"Janet Wilson",full_name:"Queen Anne Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.63626287",longitude:"-122.35795027",name:"Queen Anne Pool",official_n:"Queen Anne Pool",phone:"386-4282",pmaid:"337",point_x:"1264556.37500273",point_y:"235812.48453707",the_geom:{type:"Point",coordinates:[-122.35795026785668,47.63626286559663]}},{address:"500 23rd Ave",coordinato:"Kristen Schuler",full_name:"Medgar Evers Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.6068876",longitude:"-122.30240183",name:"Evers Pool",official_n:"Evers Memorial Pool",phone:"684-4766",pmaid:"353",point_x:"1278044.37492956",point_y:"224832.99993439",the_geom:{type:"Point",coordinates:[-122.30240182803597,47.606887600677034]}},{address:"8825 Rainier Ave S",coordinato:"Donna Sammons",full_name:"Rainier Beach Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.52476642",longitude:"-122.27033751",name:"Rainier Beach Pool",official_n:"Rainier Beach Pool",phone:"386-1944",pmaid:"434",point_x:"1285393.37499531",point_y:"194733.95317723",the_geom:{type:"Point",coordinates:[-122.27033751275907,47.524766415040474]}},{address:"2801 SW Thistle St",coordinato:"Nancy Eisner",full_name:"Southwest Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.52800132",longitude:"-122.36916224",name:"Southwest Pool",official_n:"Southwest Pool",phone:"233-7295",pmaid:"3996",point_x:"1261004.62488839",point_y:"196385.28123939",the_geom:{type:"Point",coordinates:[-122.36916224498255,47.52800132362959]}},{address:"1471 NW 67th Street",coordinato:"Angela Eddy",full_name:"Captain William R. Ballard Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.67754026",longitude:"-122.37616194",name:"Ballard Pool",official_n:"Ballard Pool",phone:"684-4094",pmaid:"498",point_x:"1260369.12517513",point_y:"250955.51560265",the_geom:{type:"Point",coordinates:[-122.376161943172,47.677540264436196]}},{address:"13401 Meridian Ave N",coordinato:"Peter Brodkin",full_name:"Helene Madison Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.72580143",longitude:"-122.3346563",name:"Madison Pool",official_n:"Helene Madison Memorial Pool",phone:"684-4979",pmaid:"285",point_x:"1270935.37503997",point_y:"268353.99983448",the_geom:{type:"Point",coordinates:[-122.33465629789156,47.72580143140825]}},{address:"8603 Fauntleroy Wy S",coordinato:"Steve Vela",full_name:"Laurence Colman Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Outdoor",latitude:"47.53045332",longitude:"-122.40097906",name:"Colman Pool",official_n:"Colman Pool",phone:"684-7494",pmaid:"460",point_x:"1253163.87482189",point_y:"197437.98451456",the_geom:{type:"Point",coordinates:[-122.40097906178957,47.53045331604131]}},{address:"7201 E GreenLk Dr N",coordinato:"Barb Marsh",full_name:"Evans Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.68018276",longitude:"-122.32843756",name:"Evans Pool",official_n:"Evans Pool",phone:"684-0881",pmaid:"307",point_x:"1272142.37492256",point_y:"251687.18736765",the_geom:{type:"Point",coordinates:[-122.3284375582711,47.68018276418633]}},{address:"10515 35th Ave NE",coordinato:"Scott Ferry",full_name:"Meadowbrook Pool",gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Indoor",latitude:"47.70534163",longitude:"-122.29162385",name:"Meadowbrook Pool",official_n:"Meadowbrook Pool",phone:"684-4989",pmaid:"352",point_x:"1281383.1251418",point_y:"260688.6404933",the_geom:{type:"Point",coordinates:[-122.29162384952146,47.70534162689962]}},{address:"2535 32nd Ave West",coordinato:"Bill Dougherty",full_name:'Lowery C. "Pop" Mounger Pool',gis_edt_dt:"1899-11-30T00:00:00.000Z",indoor_out:"Outdoor",latitude:"47.64290025",longitude:"-122.3988701",name:"Mounger Pool",official_n:'Lowery C. "Pop" Mounger Pool',phone:"684-4078",pmaid:"4473",point_x:"1254519.12506413",point_y:"238435.60954015",the_geom:{type:"Point",coordinates:[-122.39887010304064,47.642900252830444]}}],clickedPoolId:null,hasError:!1},t}return Object(c.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-wrapper"},this.state.hasError&&a.a.createElement(u,null),a.a.createElement("header",null,a.a.createElement("h1",null,"Circle Swim")),a.a.createElement("main",null,a.a.createElement(f,{getClickedPoolId:this.getClickedPoolId,poolList:this.state.filteredPoolList,handleChange:this.handleChange}),this.state.filteredPoolList.length>0&&a.a.createElement(g,{poolList:this.state.filteredPoolList,handleChange:this.handleChange,clickedPoolId:this.state.clickedPoolId,setMapError:this.setMapError})))}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d0f84620.chunk.js.map