import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StatusBarIOS,
  ListView,
  View,
  Text,
  Switch,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  AppState
} from 'react-native';
 
class AppStateDemo extends Component {
  constructor(props){
        super(props);
        this._handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            _appState:AppState.currentState,
            _changeMessage:'',
        };
  }

  componentWillMount() {
     AppState.addEventListener('change', this._handleAppStateChange);
  }
  
  componentWillUnmount() {
    console.log('AppStateDemo componentWillUnmount');
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleAppStateChange(appState) {
      alert('当前状态为:' + appState);
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text>当前App状态信息如下:</Text>
        <Text>
           {this.state._appState}
        </Text>
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
});
 
AppRegistry.registerComponent('myrndemo', () => AppStateDemo);