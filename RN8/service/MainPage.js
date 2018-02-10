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

import S0View from './Views/S0View';
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
import S18View from './Views/S18View';
import S19View from './Views/S19View';

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
                <TouchableOpacity onPress={this._onPress.bind(this, S0View)}>
                    <Text style={styles.text}>场景0：ES6语法</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S1View)}>
                    <Text style={styles.text}>场景1：View和Text</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S2View)}>
                    <Text style={styles.text}>场景2：FlexBox和Style</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S3View)}>
                    <Text style={styles.text}>场景3：自定义组件，内置和外置</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S4View)}>
                    <Text style={styles.text}>场景4：组件之间传值（1），父亲传递值给儿子，props</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S5View)}>
                    <Text style={styles.text}>场景5：state</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S6View)}>
                    <Text style={styles.text}>场景6：Component的生命周期</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S7View)}>
                    <Text style={styles.text}>场景7：输入框</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S8View)}>
                    <Text style={styles.text}>场景8：ScrollView和View</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S9View)}>
                    <Text style={styles.text}>场景9：图片，三种形式</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S10View)}>
                    <Text style={styles.text}>场景10：按钮</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S11View)}>
                    <Text style={styles.text}>场景11：触摸事件</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S12View)}>
                    <Text style={styles.text}>场景12：触摸事件，bind(this)，以及alert</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S13View)}>
                    <Text style={styles.text}>场景13：列表页</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S14View)}>
                    <Text style={styles.text}>场景14：访问网络数据1, MovieDetail</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S15View)}>
                    <Text style={styles.text}>场景15：访问网络数据2, MovieList</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S16View)}>
                    <Text style={styles.text}>场景16：组件之间传值（2），子组件传值给父组件</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S17View)}>
                    <Text style={styles.text}>场景17：Navigator</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S18View)}>
                    <Text style={styles.text}>场景18：持久化之AsyncStorage</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPress.bind(this, S19View)}>
                    <Text style={styles.text}>场景19：持久化之UserDefaults(iOS)</Text>
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