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

import { connect } from 'react-redux/src/index';


import { createStore } from 'redux';

import Counter from './Counter';

import { addReducer } from '../reducers/index'

import actions from '../actions/index';

//传入reducer函数创建store
const store = createStore(addReducer);

export default class Scenario3 extends Component {

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
        const { add, minus } = actions;
            return (
            <Counter
                value={this.state.value}
                //传说中的调用 store.dispatch(action)
                onIncrement={() => store.dispatch(add())}
                onDecrement={() => store.dispatch(minus())}
            />
        );
    }
}