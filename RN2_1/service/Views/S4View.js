import React, {
    Component
} from 'react';

import {
    View,
    Text,
} from 'react-native';

//4. 解构Destructuring
export default class S4View extends Component {
  returnMultipleValues() {
    return [1, "abc"];
  }

  returnMultipleValues2() {
    return {w1: 1, w2: "abc"};
  }

  render() {
    //传统写法
    var myArray = Array.from('hello');
    var a1 = myArray[0];
    var a2 = myArray[1];
    var a3 = myArray[2];

    //可以这么写,可以给c6设置默认值
    var [b1, b2, b3] = myArray;
    var [c1, c2, c3, c4, c5, c6="baojianqiang"] = myArray;
    var [foo, [[bar], baz]] = [1, [[2], 3]];


    //预留空位，比如，跳过1和2
    var [,, third] = [1,2,3];
  
    //结合“不定参数”
    var [name, ...fruit] = ["fruit", "apple", "Orange", "Banana"];
    console.log(fruit);

    //对象的解构，等号左边是属性，等号右边是变量
    var robotA = {name1: "baobao"};
    var {name1: nameA} = robotA;
    console.log(nameA);

    var robotB = {name2: "jianqiang"};
    var {name2: nameB} = robotB;
    console.log(nameB);

    //属性和变量同名是，比如，都叫robotC，可以直接这么写：
    var {robotC} = {robotC: "abcd"}
    console.log(robotC);

    //迭代Map
    var map = new Map();
    map.set("window1", "abc");
    map.set("window2", "123");
    for(var [key, value] of map) {
      console.log(key + ": " + value);
    }

    //只遍历map中的key
    for(var [key] of map) {
      console.log(key);
    }

    //只遍历map中的value
    for(var [,value] of map) {
      console.log(value);
    }

    //多重返回值，传统写法，
    var temp = this.returnMultipleValues2();
    console.log(temp.w1);
    console.log(temp.w2);

    //多重返回值，第一种写法
    var [d1, d2] = this.returnMultipleValues(); //［1，“abc”］
    console.log(d1);
    console.log(d2);

    //多重返回值，第2种写法
    var {w1, w2} = this.returnMultipleValues2();
    console.log(w1);
    console.log(w2);


    return (
      <View>
        <Text>{a1}</Text>
        <Text>{a2}</Text>
        <Text>{a3}</Text>
        <Text/>
        <Text>{b1}</Text>
        <Text>{b2}</Text>
        <Text>{b3}</Text>
        <Text/>
        <Text>{c1}</Text>
        <Text>{c2}</Text>
        <Text>{c3}</Text>
        <Text>{c4}</Text>
        <Text>{c5}</Text>
        <Text>{c6}</Text>
        <Text/>
        <Text>{foo}</Text>
        <Text>{bar}</Text>
        <Text>{baz}</Text>
        <Text/>
        <Text>{third}</Text>
        <Text/>
        <Text>{fruit}</Text>
      </View>
      );
  }
}