import React,{Component} from 'react';
import {
  firstName, firstName2, lastName as lastNameAA, year, foo,
  multiply, devide2,
} from './export/profile'

import * as third from './export/third'

import b1, {b2} from './export/fourth'
import abc from './export/fourth_2'
import qwe from './export/fourth_3'

//export适用于：变量、函数、类

//只能有一个export default
//对于export，使用{}包括所有要使用的模块
class Syntax12 extends Component {
    
  render() {
    return (
      <div>
      	<div>{firstName}</div>
        <div>{firstName2}</div>
        <div>{lastNameAA}</div>
        <div>{foo}</div>
        <div>{multiply(5, 3)}</div>
        <div>{devide2(6, 3)}</div>
        <div>{third.a1()}</div>
        <div>{b1()}</div>
        <div>{b2()}</div>
        <div>{abc()}</div>
        <div>{qwe()}</div>
      </div>
    );
  }
}

export default Syntax12;
