import React, { Component } from 'react';
import { mapStyle } from '../data/mapStyle.js';
import scriptLoader from 'react-async-script-loader';

const google = window.google;

class MapView extends Component {

  constructor(props){
    super(props);
    
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 41.5916799,
            lng: 13.2427548
          },
            zoom: 13,
            styles: mapStyle,
            gestureHandling: 'greedy',
            mapTypeControl: false
          });
        }
      }
      else this.props.onError()
    }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=AIzaSyCpvcttgCR8VMnxAD_vyISgecNi9Q7v1pI`]
) (MapView);