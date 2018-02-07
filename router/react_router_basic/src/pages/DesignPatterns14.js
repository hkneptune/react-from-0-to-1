import React,{Component} from 'react';

class Mediator {
    onCreate() {}
    update(colleague, param) {}
}

class ConcreteMediator extends Mediator {
    onCreate() {
        this.colleague1 = new Colleague1(this);
        this.colleague2 = new Colleague2(this);
        this.colleague3 = new Colleague3(this);
    }

    update(colleague, param) {
        if(colleague instanceof Colleague1) {
            this.colleague2.work2();
            this.colleague3.work3();
        } else if(colleague instanceof Colleague2) {
            this.colleague1.work1();
        } else {
            this.colleague2.work2();
        }
    }

    fireEventByColleague1() {
        this.colleague1.doSomething1();
    }
}

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }
}

class Colleague1 extends Colleague {
    doSomething1() {
        console.log('Colleague1 doSomething1');

        let param = "baobao";
        this.mediator.update(this, param);
    }

    work() {
        console.log('Colleague1 work');
    }
}

class Colleague2 extends Colleague {
    doSomething2() {
        console.log('Colleague2 doSomething2');
    }

    work2() {
        console.log('Colleague2 work2');
    }
}

class Colleague3 extends Colleague {
    doSomething3() {
        console.log('Colleague3 doSomething3');
    }

    work3() {
        console.log('Colleague3 work3');
    }
}

class DesignPatterns14 extends Component {

    constructor(props) {
        super(props);

        let mediator = new ConcreteMediator();
        mediator.onCreate();

        mediator.fireEventByColleague1();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns14;