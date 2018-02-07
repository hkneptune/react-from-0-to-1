import React from 'react';
import {Link} from 'react-router';

const divStyle = {
  display: 'inline-block'
}

const DesignPatterns = ({children}) => {
  return (
    <div className={divStyle}>
        <div className={divStyle}>
            <div><Link to="/ESDP/DP1">单例模式</Link></div>
            <div><Link to="/ESDP/DP2">简单工厂模式</Link></div>
            <div><Link to="/ESDP/DP3">Builder</Link></div>
            <div><Link to="/ESDP/DP4">原型模式</Link></div>
            <div><Link to="/ESDP/DP5">抽象工厂模式</Link></div>
            <div><Link to="/ESDP/DP6">适配器模式</Link></div>
            <div><Link to="/ESDP/DP7">代理模式</Link></div>
            <div><Link to="/ESDP/DP8">桥模式</Link></div>
            <div><Link to="/ESDP/DP9">外观模式</Link></div>
            <div><Link to="/ESDP/DP10">装饰器模式</Link></div>
            <div><Link to="/ESDP/DP11">组合模式</Link></div>
            <div><Link to="/ESDP/DP12">享元模式</Link></div>
            <div><Link to="/ESDP/DP13">观察者模式</Link></div>
            <div><Link to="/ESDP/DP14">中介者模式</Link></div>
            <div><Link to="/ESDP/DP15">职责链模式</Link></div>
            <div><Link to="/ESDP/DP16">策略模式</Link></div>
            <div><Link to="/ESDP/DP17">状态模式</Link></div>
            <div><Link to="/ESDP/DP18">解释器模式</Link></div>
            <div><Link to="/ESDP/DP19">模版方法模式</Link></div>
            <div><Link to="/ESDP/DP20">命令模式</Link></div>
            <div><Link to="/ESDP/DP21">备忘录模式</Link></div>
            <div><Link to="/ESDP/DP22">迭代器模式</Link></div>
            <div><Link to="/ESDP/DP23">访问者模式</Link></div>
        </div>
        <div className={divStyle}>{children}</div>

    </div>
  );
};

export default DesignPatterns;
