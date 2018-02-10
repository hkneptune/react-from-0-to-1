import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TextInput,
} from 'react-native';

export default class S7View extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <Text />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word 
            && '123').join(' ')}
        </Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}