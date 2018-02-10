'use strict';

import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Style,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <View style={{ alignItems: 'center', }}>
                <Text />
                <Text />
                <Text />
                <Text style={{ fontSize: 24, }} >{this.state.value}</Text>

                <TouchableOpacity onPress={()=>this.setState({ value: this.state.value + 1 })}>
                    <Text>++++</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({ value: this.state.value - 1 })}>
                    <Text>-----</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default class Scenario1 extends Component {

    render() {

        return (<Counter
            />
        );
    }
}