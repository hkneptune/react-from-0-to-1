import React from 'react';

import {Link} from 'react-router';

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

const view = () => {
  return (
    <div>
      <ul>
          <li style={liStyle}><Link to="/home">Home</Link></li>
          <li style={liStyle}><Link to="/Category1">Event</Link></li>
          <li style={liStyle}><Link to="/Category2">Form</Link></li>
          <li style={liStyle}><Link to="/Category3">Style</Link></li>
          <li style={liStyle}><Link to="/Category4">List</Link></li>
      </ul>
    </div>
  );
};

export {view};
