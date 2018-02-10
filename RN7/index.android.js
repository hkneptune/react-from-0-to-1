/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

export default class hello3 extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    //监听消息和Android端保持一致
    DeviceEventEmitter.addListener('Android2RN',this.handleMessage);
  }

  handleMessage(message){
    console.log(message);
  }

  _onPress() {
    NativeModules.ExampleRNInterface.handleMessage('testMessage');
  }

  _onPress2() {
    NativeModules.ExampleRNInterface.handleMessageWithCallBack('testMessage2', ()=>{console.log('baobao')});
  }

  _onPress3() {
    NativeModules.ExampleRNInterface.tryCallBack('luo', '131').then((map)=> { 
      console.log(map['user_id']);}, (code, message)=> {
      console.log(message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this._onPress.bind(this)}>
              <Text style={styles.text}>JS invoke Android</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPress2.bind(this)}>
              <Text style={styles.text}>JS invoke Android with Callback</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPress3.bind(this)}>
              <Text style={styles.text}>JS invoke Android by Promiss</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN7', () => hello3);
