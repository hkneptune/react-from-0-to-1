import React,{Component} from 'react';

class A {
    constructor(b) {
        this.b = b;
    }

    do() {
        this.b.work();
    }
}

class A1 extends A {
    do() {
        super.do();
        console.log("A1");
    }
}

class A2 extends A {
    do() {
        super.do();
        console.log("A2");
    }
}

class B {
    work() {

    }
}

class B1 extends B {
    work() {
        console.log("B1");
    }
}

class B2 extends B {
    work() {
        console.log("B2");
    }
}

class DesignPatterns8 extends Component {

    constructor(props) {
        super(props);

        let b2 = new B2();
        let a1 = new A1(b2);
        a1.do();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns8;