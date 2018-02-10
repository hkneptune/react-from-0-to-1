import React, {
    Component
} from 'react';

import {
    View,
    Text,
    ScrollView,
} from 'react-native';

export default class S8View extends Component{
  render() {
    return (
      <ScrollView>
        <Text>1234</Text>
        <View style={{width: 50, height: 890, backgroundColor: 'powderblue'}} />        
        <Text>abcd</Text>
      </ScrollView>
    );
  }
}
