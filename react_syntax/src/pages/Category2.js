import React from 'react';
import {Link} from 'react-router';

const Category2 = ({children}) => {
  return (
    <div>
        <div>
            <div><Link to="/ESSyntax/Syntax6">1.Controlled Component: Input</Link></div>
            <div><Link to="/ESSyntax/Syntax7">2.Controlled Component: RadioButton</Link></div>
            <div><Link to="/ESSyntax/Syntax8">3.Controlled Component: Multi-Select</Link></div>
            <div><Link to="/ESSyntax/Syntax9">4.Un-Controlled Component</Link></div>
        </div>
        <br/>
        <div>{children}</div>

    </div>
  );
};

export default Category2;
