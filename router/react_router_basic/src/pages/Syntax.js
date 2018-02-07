import React from 'react';
import {Link} from 'react-router';

const Syntax = ({children}) => {
  return (
    <div>
        <div>
            <div><Link to="/ESSyntax/Syntax1">1.let和const</Link></div>
            <div><Link to="/ESSyntax/Syntax2">2.for循环和迭代</Link></div>
            <div><Link to="/ESSyntax/Syntax3">3.参数</Link></div>
            <div><Link to="/ESSyntax/Syntax4">4.解构Destructuring</Link></div>
            <div><Link to="/ESSyntax/Syntax5">5.lamda表达式</Link></div>
            <div><Link to="/ESSyntax/Syntax6">6.Symbols</Link></div>
            <div><Link to="/ESSyntax/Syntax7">7.集合 Set</Link></div>
            <div><Link to="/ESSyntax/Syntax8">8.集合 Map</Link></div>
            <div><Link to="/ESSyntax/Syntax9">9.Proxy代理</Link></div>
            <div><Link to="/ESSyntax/Syntax10">10.Class</Link></div>
            <div><Link to="/ESSyntax/Syntax11">11.Promiss</Link></div>
            <div><Link to="/ESSyntax/Syntax12">12.Export</Link></div>
            <div><Link to="/ESSyntax/Syntax13">13.fetch</Link></div>
            <div><Link to="/ESSyntax/Syntax14">14.map</Link></div>
            <div><Link to="/ESSyntax/Syntax15">15.reduce</Link></div>
            <div><Link to="/ESSyntax/Syntax16">16.三个点</Link></div>
            <div><Link to="/ESSyntax/Syntax17">17.async和await</Link></div>
            <div><Link to="/ESSyntax/Syntax18">18.装饰器</Link></div>
        </div>
        <br/>
        <div>{children}</div>

    </div>
  );
};

export default Syntax;
