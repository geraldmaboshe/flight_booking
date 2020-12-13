import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MarkerIcon from '../assests/images/location_marker.png'
import List from './List'
function SpaceCenters({ spaceCenter: { id, name, latitude, longitude } }) {
    return (
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
            <List>
                {name}
            </List>

        </Link>

    )
}

export default SpaceCenters
