import React,{Component} from 'react';

class C1 {
  do() {
    console.log('c1 do');
  }
}

class C2 {
  doSomething() {
    console.log('C2 doSomething');
  }
}

class Adapter extends C1 {
    constructor(c2) {
      super();
      this.c2 = c2;
    }

    do() {
      this.c2.doSomething();
    }
}

class DesignPatterns6 extends Component {

  constructor(props) {
    super(props);

    let c1 = new C1();
    c1.do();

    let c2 = new Adapter(new C2());
    c2.do();
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default DesignPatterns6;