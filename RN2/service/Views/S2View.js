import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class S2View extends Component{
    render(){
        return (
          //默认为column
          <View style={{flex: 1, flexDirection: 'row'}}>    
            <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
            <View style={newStyles.style1} />
          </View>
        );
    }
}

const newStyles = StyleSheet.create( {
  style1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});