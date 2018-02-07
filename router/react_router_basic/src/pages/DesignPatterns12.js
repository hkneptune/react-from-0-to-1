import React,{Component} from 'react';

let __instance2 = (function () {
    let instance;
    return (newInstance) => {
        if (newInstance) instance = newInstance;
        return instance;
    }
}());

class ChessSingleton {
    constructor() {
        if (__instance2())
            return __instance2();

        //按自己需求实例化
        this.blackChess = new Chess("#000000", 10.0, 10.0);
        this.whiteChess = new Chess("#ffffff", 10.0, 10.0);

        __instance2(this);
    }

    play(n, x, y) {
        if (n === 1)
            this.blackChess.draw(x, y);
        else
            this.whiteChess.draw(x, y);
    }
}

class Chess {
    constructor(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    draw(x, y) {
        console.log('draw, ' + x + ',' + y);
    }
}

class DesignPatterns12 extends Component {

    constructor(props) {
        super(props);

        new ChessSingleton().play(1, 1, 2);
        new ChessSingleton().play(0, 2, 2);
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default DesignPatterns12;