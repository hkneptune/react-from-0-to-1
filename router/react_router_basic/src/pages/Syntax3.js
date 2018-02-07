import React,{Component} from 'react';

class Syntax3 extends Component {

  //传统写法，很low，使用arguments
  test0() {
    for(var i = 0; i < arguments.length; i++) {
      var item = arguments[i];
      console.log(item);
    }
  }

  //不定参数，只能放在最后一个的位置
  test1(name, ...items){
    //console.log(arguments.length);  这句话建议取消
    console.log(name);
    for(var item of items) {
      console.log(item);
    }
  };

  //默认参数
  test2(name="jianqiang", sex){
    console.log(name);
    console.log(sex);
  };
  
  constructor(props) {
    super(props);

    console.log("传统写法");
    this.test0("fruit", "apple");
    this.test0("fruit", "apple", "pear");

    console.log("不定参数，只能放在最后一个的位置");
    this.test1("fruit", "apple");
    this.test1("fruit", "apple", "pear");

    console.log("默认参数");
    this.test2("baobao");
    this.test2();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Syntax3;