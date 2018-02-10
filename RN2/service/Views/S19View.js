import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    NativeModules,
} from 'react-native';

export default class S19View extends Component {
    getData(text){
        let SQLManager = NativeModules.SQLManager;

        SQLManager.getUserDefaults('name', (text) => {
            console.log('userDefaults='+text);
        });
    }

    setData(data){
        let SQLManager = NativeModules.SQLManager;

        SQLManager.setUserDefaults('name', data);
    }

    render() {
    return (
       <View>
           <TouchableHighlight underlayColor="red" onPress={this.setData.bind(this, 'baobao')}>
               <Text>
                   1、设置数据
               </Text>
           </TouchableHighlight>

           <TouchableHighlight underlayColor="red" onPress={this.getData.bind(this)}>
               <Text>
                   2、获取数据
               </Text>
           </TouchableHighlight>
       </View>
    );
  }
}