import React, {
    Component
} from 'react';

import {
    View,
    Text,
    ScrollView,
} from 'react-native';

//集合 Map
export default class S8View extends Component {

  render() {
    //迭代Map
    var map = new Map();
    map.set("window1", "abc");
    map.set("window2", "123");    //map.delete("window2");

    console.log(map.get("window1"));
    console.log(map.has("window1"));

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

    for(var [key, value] of map.entries()) {
      console.log(key);      
    }

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}