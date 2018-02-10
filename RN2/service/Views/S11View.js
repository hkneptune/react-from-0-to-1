import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

export default class S11View extends Component {
  _onPressButton() {
    console.log("jianqiang!");
  }

  _onPressImage() {
    console.log("baobao!");
  }

  render() {
    return (  
        <View>
          <Text />
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Click Me</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._onPressButton()}>
            <Text>Click Me 2</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => console.log("baobao!")}>
            <Text>Click Me 3</Text>
          </TouchableHighlight>

          <Text />

          <TouchableHighlight onPress={this._onPressImage}>
            <Image source={require('../../img/favicon.jpg')} />
          </TouchableHighlight>
        </View>
    );
  }
}
