import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';

import TargetPage from "../TargetPage"

export default class S17View extends Component {
  _onPressButton() {
    const {navigator} = this.props;

    navigator.push({
        title: 'TargetPage',
        component: TargetPage,
        params : {
          userId: 1,
          userName: 'baobao',
        }
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>Click Me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}