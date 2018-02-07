import React from 'react';

// let，类似于var，但仅在let命令所在的代码块内有效。对for循环比较适用
//      不存在变量提升：代码有先后顺序，变量一定要在声明后使用。
//    暂时性死区：变量在声明前都是不可用的，称之为死区
// const：声明常量，声明时赋值

const Syntax1 = () => {
  var w = 'aww';
  const a = 'a123';
  let b = 'abc';

  return (
    <div>
        <div>{w}</div>
        <div>{a}</div>
        <div>{b}</div>
    </div>
  );
};

export default Syntax1;
