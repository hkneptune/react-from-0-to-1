import React, {
    Component
} from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';


// let，类似于var，但仅在let命令所在的代码块内有效。对for循环比较适用
//      不存在变量提升：代码有先后顺序，变量一定要在声明后使用。
//    暂时性死区：变量在声明前都是不可用的，称之为死区
// const：声明常量，声明时赋值

//1）let与const
class S0View_1 extends Component {
  render() {
    var w = 'aww';
    const a = 'a123';
    let b = 'abc';
  
    return (
      <View>
        <Text>{w}</Text>
        <Text>{a}</Text>
        <Text>{b}</Text>
      </View>
      );
  }
}

//2）for循环与迭代器
class S0View_2 extends Component {
  constructor() {
    super();
  };

  render() {

    var myArray = Array.from('hello');

    // //通用的写法（20年前）：
    // for(var index = 0; index < myArray.length; index++) {
    //   console.log(myArray[index]);
    // }

    //es5的写法
    //缺点：无法break
    // myArray.forEach(function(value) {
    //   console.log(myArray[index]);
    // });


    //es6的写法：

    //for in循环
    //缺点：循环顺序随机
    // for (var index in myArray) { // 不要真的这样写
    //  console.log(myArray[index]);
    // }

    //推荐写法：for—of
    //缺点：不支持普通对象，不能遍历一个对象的所有属性（这时候需要用for-in，或者内建的Object.keys()方法）
    for(var value of myArray) {
      if(value == "e")
        break;

      console.log(value);
    }

    //使用Object.keys()
    // for(var key of Object.keys(someObject)) {
    //   console.log(key + ": " + someObject[key]);
    // }


    // //自定义迭代器
    // var zeroesForeverIterator = {
    //   [Symbol.iterator]: function() {
    //     return this;
    //   }
    // }

    //Set的遍历


    //Map的遍历


    return (
      <View>
        <Text></Text>
        <Text></Text>
      </View>
      );
  }
}

//3. 参数
class S0View_3 extends Component {
  constructor() {
    super();

    console.log("传统写法");
    this.test0("fruit", "apple");
    this.test0("fruit", "apple", "pear");

    console.log("不定参数，只能放在最后一个的位置");
    this.test1("fruit", "apple");
    this.test1("fruit", "apple", "pear");

    console.log("默认参数");
    this.test2("baobao");
    this.test2();
  };

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

  render() {
    return (
      <View>
        <Text></Text>
      </View>
      );
  }
}

//4. 解构Destructuring
class S0View_4 extends Component {
  returnMultipleValues() {
    return [1, "abc"];
  }

  returnMultipleValues2() {
    return {w1: 1, w2: "abc"};
  }

  render() {
    //传统写法
    var myArray = Array.from('hello');
    var a1 = myArray[0];
    var a2 = myArray[1];
    var a3 = myArray[2];

    //可以这么写,可以给c6设置默认值
    var [b1, b2, b3] = myArray;
    var [c1, c2, c3, c4, c5, c6="baojianqiang"] = myArray;
    var [foo, [[bar], baz]] = [1, [[2], 3]];


    //预留空位，比如，跳过1和2
    var [,, third] = [1,2,3];
  
    //结合“不定参数”
    var [name, ...fruit] = ["fruit", "apple", "Orange", "Banana"];
    console.log(fruit);

    //对象的解构，等号左边是属性，等号右边是变量
    var robotA = {name1: "baobao"};
    var {name1: nameA} = robotA;
    console.log(nameA);

    var robotB = {name2: "jianqiang"};
    var {name2: nameB} = robotB;
    console.log(nameB);

    //属性和变量同名是，比如，都叫robotC，可以直接这么写：
    var {robotC} = {robotC: "abcd"}
    console.log(robotC);

    //迭代Map
    var map = new Map();
    map.set("window1", "abc");
    map.set("window2", "123");
    for(var [key, value] of map) {
      console.log(key + ": " + value);
    }

    //只遍历map中的key
    for(var [key] of map) {
      console.log(key);
    }

    //只遍历map中的value
    for(var [,value] of map) {
      console.log(value);
    }

    //多重返回值，传统写法，
    var temp = this.returnMultipleValues2();
    console.log(temp.w1);
    console.log(temp.w2);

    //多重返回值，第一种写法
    var [d1, d2] = this.returnMultipleValues();
    console.log(d1);
    console.log(d2);

    //多重返回值，第2种写法
    var {w1, w2} = this.returnMultipleValues2();
    console.log(w1);
    console.log(w2);


    return (
      <View>
        <Text>{a1}</Text>
        <Text>{a2}</Text>
        <Text>{a3}</Text>
        <Text/>
        <Text>{b1}</Text>
        <Text>{b2}</Text>
        <Text>{b3}</Text>
        <Text/>
        <Text>{c1}</Text>
        <Text>{c2}</Text>
        <Text>{b3}</Text>
        <Text>{c4}</Text>
        <Text>{c5}</Text>
        <Text>{c6}</Text>
        <Text/>
        <Text>{foo}</Text>
        <Text>{bar}</Text>
        <Text>{baz}</Text>
        <Text/>
        <Text>{third}</Text>
        <Text/>
        <Text>{fruit}</Text>
      </View>
      );
  }
}

//5）lamda表达式
class S0View_5 extends Component {

  addAll(pieces) {
    _.each(pieces, piece=>this.add(piece));
  }

  render() {
    var allJobs = [{id: 1, isSelected: true}, {id: 2, isSelected: true}, {id: 3, isSelected: false}];
    var selected = allJobs.filter(job => job.isSelected);
    console.log(selected[0].id);

    var values = [{a:1, b:2}, {a:3, b:4}, {a:5, b:6}];
    var total = values.reduce((a, b) => a + b, 0);
    console.log(total);

    //=>右边为一个对象时，要使用({})
    //var chewToys = puppies.map(puppy => {});    //bug
    //var chewToys = puppies.map(puppy => ({});   //right

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}

//6）Symbols
class S0View_6 extends Component {

  render() {
    var mySymbol = Symbol("bao");
    console.log(mySymbol);
    console.log(mySymbol.toString() + "a");

    var type = typeof(Symbol("bao"));
    console.log(type);

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}

//7.1）集合 Set
class S0View_7_1 extends Component {

  render() {
    var desserts = new Set("abcda");  //不会包括相同元素 只有一个a
    console.log(desserts.size);
    desserts.add("1");
    console.log(desserts.size);

    console.log(desserts.has("b"));   //检索元素，但是不支持索引

    for(var v of desserts) {    //遍历
      console.log(v);      
    }

    desserts.clear();   //清空Set


    var desserts2 = new Set([1,2,3]);
    console.log(desserts2.size);   
    desserts2.add(4); 
    desserts2.add(3); 
    console.log(desserts2.size);   
    desserts2.add(4);               //不会包括相同元素 
    console.log(desserts2.size);   

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}

//7.2）集合 Map
class S0View_7_2 extends Component {

  render() {
    //迭代Map
    var map = new Map();
    map.set("window1", "abc");
    map.set("window2", "123");    //map.delete("window2");

    console.log(map.get("window1"));
    console.log(map.has("window1"));

    for(var [key, value] of map) {
      console.log(key + ": " + value);
    }

    //只遍历map中的key
    for(var [key] of map) {
      console.log(key);
    }

    //只遍历map中的value
    for(var [,value] of map) {
      console.log(value);
    }

    for(var [key, value] of map.entries()) {
      console.log(key);      
    }

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}

//8）Proxy代理
class S0View_8 extends Component {

  render() {

    // var sonOfFooBar = new Proxy({}, {
    //   get: function (target, name) {
    //     return target[name] || foo[name] || bar[name];
    //   }
    // })
    // sonOfFooBar.foo();   //"foo",有foo方法,继承自对象foo
    // sonOfFooBar.bar();   //"bar",也有bar方法,继承自对象bar


    var engineer = { name: 'Joe Sixpack', salary: 50 };

    var interceptor = {
      get: function (receiver, property, value) {
        console.log("1");
        console.log(receiver);
        console.log(property);
        console.log(value);
        console.log("1");

        return "abc"
      },

      set: function (receiver, property, value) {
        console.log("2");
        console.log(receiver);
        console.log(property);
        console.log(value);
        console.log("2");

        console.log(property, 'is changed to', value);
        receiver[property] = value;
      }
    };

    var newEngineer = new Proxy(engineer, interceptor);

    console.log(engineer);
    engineer.salary = 60;
    console.log(engineer.salary);

    console.log(newEngineer);
    newEngineer.salary = 60;
    console.log(newEngineer.salary);

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}

//9）类
class S0View_9 extends Component {

  render() {
    var myClass = new MyClass("abcd");
    console.log(myClass.address);
//    console.log(myClass.doSomething());



    return (
      <View>
        <Text></Text>
      </View>
      );
  }
}

//MyClass的声明可以位于使用之后
class MyClass {
  //构造函数只能有一个
  // constructor() {
  //   super();
  //   this._address = "ncwjbvbkjn";
  // };

  constructor(address) {
    this._address = address;
  };

  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }

  static doSomething() {
    this._address = "123456qwe";
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }
}

//10, Promiss
//Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，
//原型上有then、catch等同样很眼熟的方法。
//这么说用Promise new出来的对象肯定就有then、catch方法喽
export default class S0View extends Component {

  render() {
    //第1段代码，原始写法
    // function runAsync0(callback){
    //   setTimeout(function(){
    //     console.log('执行完成');
    //     callback('随便什么数据');
    //   }, 2000); 
    // }

    // runAsync0(function(data){
    //   console.log(data);
    // });


    //第2段代码
    // var p = new Promise(function(resolve, reject){
    // //做一些异步操作
    // setTimeout(function(){
    //     console.log('执行完成');
    //     resolve('随便什么数据');
    //     }, 2000);
    // });

    // //第3段代码, resolve就是回调函数的意思，then函数里面的参数，就是具体的回调函数
    // function runAsync(){
    //   var p = new Promise(function(resolve, reject){
    //     //做一些异步操作
    //     setTimeout(function(){
    //         console.log('执行完成');
    //         resolve('随便什么数据');
    //     }, 2000);
    //   });
    
    //   return p;            
    // }

    // runAsync().then(function(data){
    //   console.log(data);  //打印“随便什么数据”
    // });

    //第4段代码：链式写法，仿照fetch
    function runAsync1(){
      var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 3000);
      });
      return p;            
    }

    function runAsync2(){
      var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
      });
      return p;            
    }

    function runAsync3(){
      var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 1000);
      });
      return p;            
    }
    //
    // runAsync1().then(function(data){
    //   console.log(data);
    //   return runAsync2();
    // }).then(function(data){
    //   console.log(data);
    //   return runAsync3();
    // }).then(function(data){
    //   console.log(data);
    // });

// //第5段代码：reject，失败处理
// function getNumber(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*10); //生成1-10的随机数
//             if(num<=5){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太大了');
//             }
//         }, 2000);
//     });
//     return p;            
// }

// getNumber()
// .then(
//     function(data){
//         console.log('resolved');
//         console.log(data);
//     }, 
//     function(reason, data){
//         console.log('rejected');
//         console.log(reason);
//     }
// );

// //第6段代码，catch
// getNumber()
// .then(function(data){
//     console.log('resolved');
//     console.log(data);
//     console.log(somedata); //此处的somedata未定义
// })
// .catch(function(reason){
//     console.log('rejected');
//     console.log(reason);
// });


// //第7段代码，all,并行执行异步操作
// Promise
//   .all([runAsync1(), runAsync2(), runAsync3()])
//   .then(function(results){
//     console.log(results);
//   });


//第8段代码，race，用于超时控制
function requestImg(){  //请求某个图片资源
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = 'xxx';
    });
    return p;
}

//延时函数，用于给请求计时
//如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。
//如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log("1");  
    console.log(results);
})
.catch(function(reason){
    console.log("2");  
    console.log(reason);
});

    return (
      <View>
        <Text>123</Text>
      </View>
      );
  }
}

//5.1 Scene
//require('./service/HelloWorldApp');

//5.2 Navigator
//require('./service/Nav/Basic1/SimpleNavigationApp');
//require('./service/Nav/Basic2/NavigatorDelegate');

//5.3 AppState
//require('./service/AppStateDemo');
