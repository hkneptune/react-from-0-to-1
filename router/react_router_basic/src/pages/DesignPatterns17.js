import React,{Component} from 'react';

class State {
    execute() {}
}

class S1 extends State {
    execute() {
        console.log('s1');
    }
}

class S2 extends State {
    execute() {
        console.log('s1');
    }
}

class Context {
    constructor(_state) {
        this.state = _state;
    }

    execute() {
        this.state.execute();
    }
}

class DesignPatterns17 extends Component {

    constructor(props) {
        super(props);

        let s1 = new S1();
        let c1 = new Context(s1);
        c1.execute();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns17;