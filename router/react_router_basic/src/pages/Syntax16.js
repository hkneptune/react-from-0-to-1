import React,{Component} from 'react';

//rest参数（形式为“...变量名”），用于获取函数的多余参数，...后接受一个数组, 取代slice.call
//...
//用于替代apply方法，展开数组，是rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
class Syntax16 extends Component {

  add(...values){
    let sum = 0;

    for (var val of values) {
      sum += val;
    } 

    return sum;
  }

  push(array, ...items) {  
    array.push(...items);  
  }  

  constructor(props) {
    super(props);
  }

  render() {
  	console.log(this.add(2,1,2));   //5

    console.log(...[1, 2, 3]);
    console.log(1, ...[2, 3, 4], 5);

    //主要用于函数调用，如...this.props
    //这里this.props是一个数组
    let array = [4,5,6];
    array.push(...[1,2,3]);
    console.log(array);
    
    return (
      <div>
      </div>
    );
  }
}

export default Syntax16;
