import React from 'react';
import {Link} from 'react-router';

const Category4 = ({children}) => {
  return (
    <div>
        <div>
        <div><Link to="/ESSyntax/Syntax12">1.List</Link></div>
        </div>
        <br/>
        <div>{children}</div>

    </div>
  );
};

export default Category4;
