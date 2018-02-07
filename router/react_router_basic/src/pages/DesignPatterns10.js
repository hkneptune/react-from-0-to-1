import React, {Component} from 'react';

class MySubject {
    do() {

    }
}

class RealSubject extends MySubject {
    do() {
        console.log('RealSubject');
    }
}

class Decorator extends MySubject {
    constructor(mySubject) {
        super();

        this.mySubject = mySubject;
    }

    do() {

    }
}

class D1 extends Decorator {
    do() {
        super.do();

        this.do1();
    }

    do1() {
        console.log('D1');
    }
}

class D2 extends Decorator {
    do() {
        super.do();

        this.do2();
    }

    do2() {
        console.log('D2');
    }
}

class DesignPatterns10 extends Component {

    constructor(props) {
        super(props);

        let s1 = new RealSubject();
        let d1 = new D1(s1);
        let d2 = new D1(d1);
        d2.do();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns10;