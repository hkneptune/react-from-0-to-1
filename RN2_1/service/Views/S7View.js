import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TextInput,
} from 'react-native';

//集合 Set
export default class S7View extends Component {

  render() {
    var desserts = new Set("abcda");  //不会包括相同元素 只有一个a
    console.log(desserts.size);
    desserts.add("1");
    console.log(desserts.size);

    console.log(desserts.has("b"));   //检索元素，但是不支持索引

    for(var v of desserts) {    //遍历
      console.log(v);      
    }

    desserts.clear();   //清空Set


    var desserts2 = new Set([1,2,3]);
    console.log(desserts2.size);   
    desserts2.add(4); 
    desserts2.add(3); 
    console.log(desserts2.size);   
    desserts2.add(4);               //不会包括相同元素 
    console.log(desserts2.size);   

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}