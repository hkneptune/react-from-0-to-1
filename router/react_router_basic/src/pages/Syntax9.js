import React,{Component} from 'react';

class Syntax9 extends Component {

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
    console.log(newEngineer);
    engineer.salary = 60;
    console.log(engineer.salary);

    return (
      <div>
      </div>
    );
  }
}

export default Syntax9;
