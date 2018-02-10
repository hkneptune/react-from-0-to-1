'use strict';

import React, { Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    Style,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Counter extends Component {

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