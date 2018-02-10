import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class S10View extends Component {
  _onPressButton() {
    console.log("jianqiang!");
  }

  render() {
    return (  
        <View>
          <Text />
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Click Me</Text>
          </TouchableHighlight>
        </View>
      )
  }
}