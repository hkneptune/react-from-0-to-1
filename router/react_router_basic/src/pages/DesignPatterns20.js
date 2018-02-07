import React, {Component} from 'react';

class Receiver {
    action() {
        console.log('Receiver');
    }
}

class Command {
    constructor() {
    }

    execute() { }
}

class Command1 extends Command {
    constructor(receiver) {
        super();
        this.receiver = receiver;
    }

    execute() {
        this.receiver.action();
    }
}

class Invoker {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class DesignPatterns20 extends Component {

    constructor(props) {
        super(props);

        let receiver = new Receiver();
        let cmd = new Command1(receiver);
        let invoker = new Invoker(cmd);
        invoker.execute();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns20;