import React,{Component} from 'react';

class Subject {
    do() {
    }
}

class RealSubject extends Subject {
    do() {
        console.log('RealSubject');
    }
}

class MyProxy extends Subject {
    constructor(_proxy) {
        super();
        this.proxy = _proxy;
    }

    do() {
        console.log('MyProxy');

        this.proxy.do();
    }
}

class DesignPatterns7 extends Component {

    constructor(props) {
        super(props);

        let real = new RealSubject();
        let proxy = new MyProxy(real);
        proxy.do();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns7;