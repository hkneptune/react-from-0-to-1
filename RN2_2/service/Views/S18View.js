import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    AsyncStorage
} from 'react-native';

const {width, height} = Dimensions.get('window');

var data = "";
const AsyncStorageKey = "AS_";

export default class S8View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:""
    };
  }

  setData(text){
    AsyncStorage.setItem(AsyncStorageKey, text, ()=>{
      this.setState({
        data:text,
      });
    });
  }

  delData(){
    // 读取key字段并将结果作为第二个参数传递给callback。
    // 如果有任何错误发生，则会传递一个Error对象作为第一个参数。返回一个Promise对象。
    AsyncStorage.getItem(AsyncStorageKey, (error, text)=>{
      if(text=== null ){
        alert(AsyncStorageKey +"没有对应的值");
      }else{
        //删除数据
        AsyncStorage.removeItem(AsyncStorageKey,()=>{
          this.setState({
            data:"",
          },()=>{
            alert('删除成功');
          });
        });
      }
    });
  }



  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={this.setData.bind(this,"我是包建强")}>
            <Text style={styles.itemText}>
              1、存储数据
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={this.delData.bind(this)}>
            <Text style={styles.itemText}>
              2、删除数据
            </Text>
          </TouchableHighlight>

          <Text style={{paddingTop:40}}>
            AsyncStorage存储的值是:{this.state.data}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop:20,
  },
  itemView:{
    backgroundColor:'grey',
    height:44,
    width:width,
    justifyContent:'center',
    marginTop:10,
  },
  itemText:{
    fontSize:15,
    color:'#ffffff',
    textAlign:'left',
    marginLeft:20,
  },
});
