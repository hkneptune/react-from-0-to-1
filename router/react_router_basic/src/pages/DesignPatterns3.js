import React, {Component} from 'react';

class Director {
    constructor(builder) {
        this.builder = builder;
    }

    concrete() {
        this.builder.buildPart();
    }
}

class Builder {
    buildPart() {
    }

    getProduct() {
    }
}

class Product1 {

}

class Builder1 {

    buildPart() {
        console.log('product1');
        this.product1 = new Product1();
    }

    getProduct() {
        return this.product1;
    }
}

class Product2 {

}

class Builder2 {

    buildPart() {
        console.log('product2');
        this.product2 = new Product2();
    }

    getProduct() {
        return this.product2;
    }
}


class DesignPatterns3 extends Component {

    constructor(props) {
        super(props);

        let b1 = new Builder1();
        let d1 = new Director(b1);
        d1.concrete();

        var p1 = b1.getProduct();
        console.log(p1);
    }

    render() {
        return (
            <div>
                <div>Builder模式代码</div>
            </div>
        );
    }
};

export default DesignPatterns3;
