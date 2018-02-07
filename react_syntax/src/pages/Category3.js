import React from 'react';
import {Link} from 'react-router';

const Category3 = ({children}) => {
  return (
    <div>
        <div>
        <div><Link to="/ESSyntax/Syntax10">1.Inside Style</Link></div>
        <div><Link to="/ESSyntax/Syntax11">2.CSS Module</Link></div>
        </div>
        <br/>
        <div>{children}</div>

    </div>
  );
};

export default Category3;
