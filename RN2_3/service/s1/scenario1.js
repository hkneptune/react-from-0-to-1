'use strict';

import React, { Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Style,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import { createStore } from 'redux';

class Counter extends Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props

        console.log(value);
        //view
        return (
            <View style={{ alignItems: 'center', }}>
                <Text />
                <Text />
                <Text />
                <Text style={{ fontSize: 24, }} >{value}</Text>

                <TouchableOpacity onPress={onIncrement}>
                    <Text>++++</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onDecrement}>
                    <Text>-----</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

//reducer函数，state默认值是0
function counter(abc = 0, action) {
    //根据传进来的action改变state的值
    switch (action.type) {
        case 'INCREMENT':
            return abc + 1;
        case 'DECREMENT':
            return abc - 1;
        default:
            return abc;
    }
}

//传入reducer函数创建store
const store = createStore(counter);


export default class Scenario1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    componentDidMount = () => {
        //设置监听，当store的state值更新，刷新render
        store.subscribe(() =>
            this.setState({ value: store.getState() }));
    }

    render() {

        return (<Counter
                value={this.state.value}
                //传说中的调用 store.dispatch(action)
                onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
                onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }
            />
        );
    }
}