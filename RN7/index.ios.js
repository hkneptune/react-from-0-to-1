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
  NativeEventEmitter,
} from 'react-native';

//通过oc中RCTRootView构造函数的参数来传递参数，并通过一个oc中的按钮来修改这个参数值
export default class test1 extends Component {
  componentDidMount(){

    // const myModuleEvt = new NativeEventEmitter(NativeModules.MyModule)
    // myModuleEvt.addListener('sayHello', (data) => console.log(data))
  }
  
  _onPress() {
    let date = new Date();

    let CalendarManager = NativeModules.CalendarManager;
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');

    // 把日期以unix时间戳形式传递
    CalendarManager.addEvent2('Birthday Party', '4 Privet Drive, Surrey', date.getTime());    
    
    // 把日期以ISO-8601的字符串形式传递
    CalendarManager.addEvent3('Birthday Party', '4 Privet Drive, Surrey', date.toISOString());    

    //试试自动转换日期
    CalendarManager.addEvent4('Birthday Party', '4 Privet Drive, Surrey', date.getTime());    
    CalendarManager.addEvent4('Birthday Party', '4 Privet Drive, Surrey', date.toISOString());    

    //多个参数，使用字典
    CalendarManager.addEvent5('Birthday Party', {
            location: '4 Privet Drive, Surrey',
            time: date.getTime(),
            description: '...'
    });

    //回调，js获取app方法执行结果
    CalendarManager.RNInvokeOCCallBack(
             {'name':'good','description':'http://www.lcode.org'},
             (error,events)=>{
                 if(error){
                   console.error(error);
                 }else{
                   console.log(events);
                 }}
    );

    async function updateEvents() {
      try {
        let events = await CalendarManager.findEvents();
        console.log(events);
      } catch (e) {
        console.error(e);
      };
    }

    updateEvents();
  }

  _onPress2() {
    let Navigator = NativeModules.Navigator;

    //回调，js获取app方法执行结果
    Navigator.navigatorTo(
             'AboutUsViewController2',
             {'version':'5.7.1','description':'http://www.lcode.org'}
             );
  }

  //Sqlite

    errorCB(err){
        console.log("SQL Error: " + err);
    };

    successCB(){
        console.log("SQL executed fine");
    };

    openCB(){
        console.log("Database OPENED");
    };  

    _onPress3() {
        var SQLite = require('react-native-sqlite-storage');


        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);
        db.transaction((tx) => {
            //建表
            tx.executeSql('CREATE TABLE UserTable(field varchar(255),LastName varchar(255))', [], (tx, results) => {
                console.log("create table completed");
            });

            //查询
            tx.executeSql('SELECT * FROM UserTable', [], (tx, results) => {
                console.log("Query completed");

                // Get rows with Web SQL Database spec compliance.

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                }
            });
        });      
    }

  render() {
    return (
      <View style={styles.container}>
          <Text>{this.props.lastname}!</Text>
          <TouchableOpacity onPress={this._onPress.bind(this)}>
              <Text style={styles.text}>Click Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress2.bind(this)}>
              <Text style={styles.text}>跳出去</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress3.bind(this)}>
              <Text style={styles.text}>SQLite</Text>
          </TouchableOpacity>
      </View>
    );
  }

  componentWillUnmount() {
    //subscription.remove();
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

AppRegistry.registerComponent('RN6', () => test1);
