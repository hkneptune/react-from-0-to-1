import React, {
    Component
} from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';

export default class S9View extends Component {
  render() {
    return (
       <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'a'}} style={{width: 40, height: 40}} />
          <Image source={{uri: 'https://static.oschina.net/uploads/user/116/233834_50.jpg'}} 
                 style={{width: 40, height: 40}} />
          <Image source={require('../../img/favicon.jpg')} />
          <Text style={{fontSize:96}}>If you like</Text>
        </ScrollView>
    );
  }
}