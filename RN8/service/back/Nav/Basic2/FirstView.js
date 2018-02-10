import React, {
    Component
} from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    Navigator,
    StyleSheet,
} from 'react-native';

import SecondView from './SecondView';

export default class FirstView extends Component{
    constructor(props){
        super(props);
        
        this.props.route.title = 'FirstView';
    }

    _onPress() {
        const {navigator} = this.props;

        navigator.push({
            title: '第二页',
            component: SecondView,
            params : {
                userId: 1,
                userName: 'baobao',
            }
        });
    }

    render () {
        return (
            <View>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text style={styles.text}>跳转到下个页面</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        height:150,
        lineHeight:150,
        letterSpacing:5,
        textDecorationColor:'#ff0000',
        width:320
    },

    info:{
        fontSize:15,
        textAlign:'center',
        height:150,
        lineHeight:150,
        // letterSpacing:5,
        textDecorationColor:'#ff0000',
        width:320
    },
});