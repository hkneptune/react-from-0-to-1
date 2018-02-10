import React, {
    Component
} from 'react';

import {
    View,
    Text
} from 'react-native';


export default class S5View extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true, text: "baobao" };
  }

  componentDidMount() {
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }


  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.state.text : ' ';

    return (
      <Text>{display}</Text>
    );
  }
}