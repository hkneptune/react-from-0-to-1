import React,{Component} from 'react';

class A {
    do() {
        console.log('class A do');
    }
}

class B {
    sleep() {
        console.log('class B sleep');
    }
}

class C {
    static work() {
        console.log('class C work');
    }
}

class Facade {
    constructor() {
        this.classA = new A();
        this.classB = new B();
    }

    do() {
        this.classA.do();
    }

    sleep() {
        this.classB.sleep();
    }

    work() {
        C.work();
    }
}


class DesignPatterns9 extends Component {

    constructor(props) {
        super(props);

        let facade = new Facade();
        facade.work();
        facade.do();
        facade.sleep();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns9;