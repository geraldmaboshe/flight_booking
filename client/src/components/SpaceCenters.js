import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MarkerIcon from '../assests/images/location_marker.png'
function SpaceCenters({ spaceCenter: { id, name, latitude, longitude } }) {
    return (
        <Link to={`/${id}`}>
            {name}
        </Link>

    )
}

export default SpaceCenters
