import React,{Component} from 'react';

//Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，
//原型上有then、catch等同样很眼熟的方法。
//这么说用Promise new出来的对象肯定就有then、catch方法喽
class Syntax11 extends Component {


    
  constructor(props) {
    super(props);

  //第1段代码，原始写法
    function runAsync0(callback){
      setTimeout(function(){
        console.log('执行完成');
        callback('随便什么数据');
      }, 2000); 
    }

    runAsync0(function(data){
      console.log(data);
    });  

//第2段代码
    var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
        }, 2000);
    });

    //第3段代码, resolve就是回调函数的意思，then函数里面的参数，就是具体的回调函数
    function runAsync(){
      var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
      });
    
      return p;            
    }

    runAsync().then(function(data){
      console.log(data);  //打印“随便什么数据”
    });

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
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Syntax11;
