import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet,
} from 'react-native';

export default class S22View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId : 1,
      userName : 'jianqiang'
    };    
  }

  _onPressButton() {
    alert(this.state.userName);
  }

  render() {
    return (  
        <View>
          <Text />
          <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text>Click Me</Text>
          </TouchableHighlight>
        </View>
    );
  }
}