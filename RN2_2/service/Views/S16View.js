import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

//父亲把回调onChildChanged传递给儿子
export default class S18View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1 : 'jianqiang'
    };
  }

  onChildChanged(newName) {
    this.setState({ name1: newName });
  }

  render() {
    return (
      <View>
        <ChildCompontent
          callbackParent = {this.onChildChanged.bind(this)}
       />
        <Text>{this.state.name1}</Text>
      </View>
    )
  }
}

class ChildCompontent extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    this.props.callbackParent('baobao');    
  }

  render() {
    return (   
      <View>     
        <Text></Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>Click Me</Text>
        </TouchableHighlight>             
      </View>     
      )
  }
}
