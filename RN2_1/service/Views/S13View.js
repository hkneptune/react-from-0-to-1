import React, {
    Component
} from 'react';

import {
    View,
    Text,
    ListView,
} from 'react-native';

import {
  firstName, firstName2, lastName as lastNameAA, year, foo,
  multiply, devide2,
} from '../profile'

import * as third from '../third'

import b1, {b2} from '../fourth'
import abc from '../fourth_2'
import qwe from '../fourth_3'

//export适用于：变量、函数、类

//只能有一个export default
//对于export，使用{}包括所有要使用的模块
export default class S13View extends Component {
  render() {

    return (
      <View style={{paddingTop: 22}}>
        <Text>{firstName}</Text>
        <Text>{firstName2}</Text>
        <Text>{lastNameAA}</Text>
        <Text>{foo}</Text>
        <Text>{multiply(5, 3)}</Text>
        <Text>{devide2(6, 3)}</Text>
        <Text>{third.a1()}</Text>
        <Text>{b1()}</Text>
        <Text>{b2()}</Text>
        <Text>{abc()}</Text>
        <Text>{qwe()}</Text>
      </View>
    );
  }
};
