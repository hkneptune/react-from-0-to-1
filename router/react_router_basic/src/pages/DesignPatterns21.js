import React,{Component} from 'react';

class State {
    constructor(age) {
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(newAge) {
        this.age = newAge;
    }
}

class Memento {
    constructor(state) {
        this.state = state;
    }
}

class CareTaker {
    constructor() {
        this.mList = new Set();
    }

    add(memento) {
        this.mList.add(memento);
    }

    remove() {

    }

    get(i) {
        return this.mList[i];
    }
}

class Originator {
    constructor() {
        this.state = new State(10);
    }

    createMemento() {
        let cloneState = new State(this.state.age);

        return new Memento(cloneState);
    }
}

class DesignPatterns21 extends Component {

    constructor(props) {
        super(props);

        let originator = new Originator();
        let memento = originator.createMemento();

        let careTaker = new CareTaker();
        careTaker.add(memento);

        let memento2 = careTaker.get(0);
        console.log(memento2.age);
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns21;