import React, { Component } from 'react';
import { Marker } from 'google-maps-react';

export class Markers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'The marker`s title will appear as a tooltip.',
      name: 'HRLA eeeeeeeeee yeeeeee son!!!',
      LAT: 'lat: 33.976796',
      LNG:  'lng: -118.392161',
    }
    this.setMarkerValues = this.setMarkerValues.bind(this)
  }

  setMarkerValues(title, name, LAT, LNG) {
    this.setState({
      title,
      name,
      LAT,
      LNG,
    })
  }

  render() {
    return (
      <Marker
        title={this.state.title}
        name={this.state.name}
        position={this.state.position}
        onClick={this.props.markerClick}
      />
    )
  }
}