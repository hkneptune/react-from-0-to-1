import React from 'react';
import {Link} from 'react-router';

const Category1 = ({children}) => {
  return (
    <div>
        <div>
            <div><Link to="/ESSyntax/Syntax1">1.bind syntax</Link></div>
            <div><Link to="/ESSyntax/Syntax2">2.bind in ctor</Link></div>
            <div><Link to="/ESSyntax/Syntax3">3.=> auto bind this</Link></div>
            <div><Link to="/ESSyntax/Syntax4">4.use => in html</Link></div>
            <div><Link to="/ESSyntax/Syntax5">5.Ref</Link></div>
        </div>
        <br/>
        <div>{children}</div>

    </div>
  );
};

export default Category1;
