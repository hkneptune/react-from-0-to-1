import React, {
    Component
} from 'react';

import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import S1View from './Views/S1View';
import S2View from './Views/S2View';
import S3View from './Views/S3View';
import S4View from './Views/S4View';
import S5View from './Views/S5View';
import S6View from './Views/S6View';
import S7View from './Views/S7View';
import S8View from './Views/S8View';
import S9View from './Views/S9View';
import S10View from './Views/S10View';
import S11View from './Views/S11View';
import S12View from './Views/S12View';
import S13View from './Views/S13View';
import S14View from './Views/S14View';
import S15View from './Views/S15View';
import S16View from './Views/S16View';
import S17View from './Views/S17View';

export default class MainPage extends Component {
    constructor(props){
        super(props);        
    }

    _onPress(view) {
        const {navigator} = this.props;

        navigator.push({
            component: view,
        });
    }

    render() {
        return(
            <ScrollView>
                <TouchableOpacity onPress={this._onPress.bind(this, S1View)}>
                    <Text style={styles.text}>场景1：let和const</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S2View)}>
                    <Text style={styles.text}>场景2：for循环与迭代器</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S3View)}>
                    <Text style={styles.text}>场景3：参数</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S4View)}>
                    <Text style={styles.text}>场景4：解构Destructuring</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S5View)}>
                    <Text style={styles.text}>场景5：lamda表达式</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S6View)}>
                    <Text style={styles.text}>场景6：Symbols</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S7View)}>
                    <Text style={styles.text}>场景7：集合 Set</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S8View)}>
                    <Text style={styles.text}>场景8：集合 Map</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S9View)}>
                    <Text style={styles.text}>场景9：集合 Array</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S10View)}>
                    <Text style={styles.text}>场景10：Proxy</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S11View)}>
                    <Text style={styles.text}>场景11：类</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S12View)}>
                    <Text style={styles.text}>场景12：Promiss</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S13View)}>
                    <Text style={styles.text}>场景13：Module</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S14View)}>
                    <Text style={styles.text}>场景14：Mixin</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S15View)}>
                    <Text style={styles.text}>场景15：map</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S16View)}>
                    <Text style={styles.text}>场景16：reduce</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S17View)}>
                    <Text style={styles.text}>场景17：rest参数和...操作符</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPress.bind(this, S17View)}>
                    <Text style={styles.text}>场景20：CommonJS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPress.bind(this, S17View)}>
                    <Text style={styles.text}>场景21：use strict</Text>
                </TouchableOpacity>
            </ScrollView>
         );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        textAlign:'left',
        height:30,
        lineHeight:20,
        //letterSpacing:5,
        //textDecorationColor:'#ff0000',
        width:520
    },
});