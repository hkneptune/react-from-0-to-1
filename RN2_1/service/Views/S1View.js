import React, {
    Component
} from 'react';

import {
    View,
    Text
} from 'react-native';

// let，类似于var，但仅在let命令所在的代码块内有效。对for循环比较适用
//      不存在变量提升：代码有先后顺序，变量一定要在声明后使用。
//    暂时性死区：变量在声明前都是不可用的，称之为死区
// const：声明常量，声明时赋值

//1）let与const
export default class S1View extends Component {
  render() {
    var w = 'aww';
    const a = 'a123';
    let b = 'abc';
  
    return (
      <View>
        <Text>{w}</Text>
        <Text>{a}</Text>
        <Text>{b}</Text>
      </View>
      );
  }
}