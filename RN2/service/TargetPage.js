import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

export default class TargetPage extends Component {
  constructor(props) {
      super(props);

      this.state = {
          userId : null,
          userName : null
      };
  }

  componentDidMount() {
      this.setState({
          uerId:this.props.userId,
          userName:this.props.userName
      });
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.state.userName}.</Text>
      </View>
    )
  }
}

