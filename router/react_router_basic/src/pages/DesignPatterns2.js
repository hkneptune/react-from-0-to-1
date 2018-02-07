import React, {Component} from 'react';

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

class SimpleFactory {
    static getProduct(_type) {
        let a;

        if(_type === 1) {
            a = new A1();
        } else if(_type === 2){
            a = new A2();
        } else {
            //do nothing
        }

        return a;
    }
}

class DesignPatterns2 extends Component {

    constructor(props) {
        super(props);

        SimpleFactory.getProduct(1).do();
    }

    render() {
        return (
            <div>
                <div>简单工厂模式代码</div>
            </div>
        );
    }
};

export default DesignPatterns2;
