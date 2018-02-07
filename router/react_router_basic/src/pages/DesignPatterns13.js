import React,{Component} from 'react';

class Observer {
    update() {}
}

class Subject {
    subscribe() {}
    unsubscribe() {}
    notifyAll() {}
}

class Observer1 extends Observer{
    update() {
        console.log('Observer1');
    }
}

class Observer2 extends Observer {
    update() {
        console.log('Observer2');
    }
}

class MySubject extends Subject{
    constructor() {
        super();
        this.observers = new Set();
    }

    subscribe(observer) {
        this.observers.add(observer);
    }

    unsubscribe() {
        //this.observers.remove(observer);
    }

    notifyAll() {
        for(let observer of this.observers) {
            observer.update();
        }
    }
}

class DesignPatterns13 extends Component {

    constructor(props) {
        super(props);

        let subject = new MySubject();
        let observer1 = new Observer1();
        subject.subscribe(observer1);
        let observer2 = new Observer2();
        subject.subscribe(observer2);

        subject.notifyAll();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns13;