import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
function SpaceCenters({ spaceCenter: { id, name } }) {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <List>{name}</List>
    </Link>
  );
}

export default SpaceCenters;
