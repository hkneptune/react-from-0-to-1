import React,{Component} from 'react';

class A {
    do() {

    }
}

class A1 extends A {
    do() {
        console.log("A1");
    }
}

class A2 extends A {
    do() {
        console.log("A2");
    }
}

class DesignPatterns19 extends Component {

    constructor(props) {
        super(props);

        let a1 = new A1();
        a1.do();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns19;