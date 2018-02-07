import React,{Component} from 'react';

class Strategy {
    execute() {}
}

class S1 extends Strategy {
    execute() {
        console.log('s1');
    }
}

class S2 extends Strategy {
    execute() {
        console.log('s1');
    }
}

class Context {
    constructor(_strategy) {
        this.strategy = _strategy;
    }

    execute() {
        this.strategy.execute();
    }
}

class DesignPatterns16 extends Component {

    constructor(props) {
        super(props);

        let s1 = new S1();
        let context = new Context(s1);
        context.execute();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns16;