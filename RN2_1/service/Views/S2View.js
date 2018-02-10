import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

//2）for循环与迭代器
export default class S2View extends Component {
  constructor() {
    super();
  };

  render() {

    var myArray = Array.from('hello');

    // //通用的写法（20年前）：
    // for(var index = 0; index < myArray.length; index++) {
    //   console.log(myArray[index]);
    // }

    //es5的写法
    //缺点：无法break
    // myArray.forEach(function(value) {
    //   console.log(myArray[index]);
    // });


    //es6的写法：

    //for in循环
    //缺点：循环顺序随机
    // for (var index in myArray) { // 不要真的这样写
    //  console.log(myArray[index]);
    // }

    //推荐写法：for—of
    //缺点：不支持普通对象，不能遍历一个对象的所有属性（这时候需要用for-in，或者内建的Object.keys()方法）
    for(var value of myArray) {
      if(value == "e")
        break;

      console.log(value);
    }

    //使用Object.keys()
    // for(var key of Object.keys(someObject)) {
    //   console.log(key + ": " + someObject[key]);
    // }


    // //自定义迭代器
    // var zeroesForeverIterator = {
    //   [Symbol.iterator]: function() {
    //     return this;
    //   }
    // }

    //Set的遍历


    //Map的遍历


    return (
      <View>
        <Text></Text>
        <Text></Text>
      </View>
      );
  }
}