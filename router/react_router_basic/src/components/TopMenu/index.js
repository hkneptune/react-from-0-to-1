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
          <li style={liStyle}><Link to="/home">首页</Link></li>
          <li style={liStyle}><Link to="/ESSyntax">ES6基本语法</Link></li>
          <li style={liStyle}><Link to="/ESDP">ES6与设计模式</Link></li>
      </ul>
    </div>
  );
};

export {view};
