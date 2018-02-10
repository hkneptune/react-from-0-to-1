import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class S6View extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "jianqiang" };


    console.log('S6View constructor');
  }

  static defaultProps = {
    name: 'empty name',
  }; 

  static propTypes = {
    name: PropTypes.string.isRequired,
  };  

  componentWillMount(){
    //在组件渲染之前调用。在这个方法中根据业务逻辑对state进行操作
    console.log('S6View componentWillMount');
  }

  componentDidMount(){
    //虚拟DOM转为真实DOM。组件内部可以通过一个this.getDOMNode()来获取当前组件节点
    console.log('S6View componentDidMount');
  }

  componentWillUnmount(){
    //当组件需要从DOM中移除的时候，通常需要做一些取消事件绑定:
    //1.移除虚拟DOM中对应的组件数据结构
    //2.销毁一些无效的定时器等工作
    console.log('S6View componentWillUnmount');
  }

  componentWillReceiveProps() {
    //当组件接收到新的props时，会触发该函数。在该函数中，通常可以调用setState()来完成对state的修改。 
    console.log('S6View componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    //可以拦截新的props或state，决定要不要更新组件
    console.log('S6View shouldComponentUpdate');

    return true;
  }

  componentWillUpdate() {
    //在更新之前做一些操作
    console.log('S6View componentWillUpdate');
  }

  componentDidUpdate() {
    //虚拟DOM同步到DOM中后，执行该方法，可以在这个方法中做DOM操作
    console.log('S6View componentDidUpdate');
  }

  render() {
    //实例化阶段：根据state的值，生成对应虚拟DOM结构。并返回该结构
    //更新阶段：根据diff算法，生成需要更新的虚拟DOM数据
    console.log('S6View render');
    console.log(this.state.name);

    return (
      <View> 
        <GreetingWithLog name={this.state.name} />
        <Text/>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text>Click Me</Text>
        </TouchableHighlight>

      </View>
    );
  }

  _onPressButton() {
    this.setState({name : "123"});
  }
}

class GreetingWithLog extends Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };

    console.log('GreetingWithLog constructor');
    console.log(this.props.name);
  }

  componentWillReceiveProps() {
    //当组件接收到新的props时，会触发该函数。在该函数中，通常可以调用setState()来完成对state的修改。 
    console.log('NewGreetingWithLog componentWillReceiveProps');
    console.log(this.props.name);
    this.setState({name : this.props.name});    //仍然是上次的值，谨慎使用
    console.log(this.state.name);
  }

  render() {
    return (
      <Text>{this.props.name}!</Text>
    );
  }
}
