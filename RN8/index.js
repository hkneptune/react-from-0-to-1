import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import MainPage from './service/MainPage';

class App extends Component{

    _renderScene (route, navigator) {
        let ComponentSelf = route.component;
        return(<ComponentSelf {...route.params} route={route} navigator ={navigator} />);
    }

    _renderNavBar() {
        //创建routeMapper
        var routeMapper = {

            LeftButton(route, navigator, index, navState){
                if (index > 0){
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}> back </Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => route.leftButton && route.leftButton.clicked()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>{route.leftButton && route.leftButton.title}</Text>
                        </TouchableOpacity>
                    );
                }
            },

            RightButton(route, navigator, index, navState){
                return null
            },

            Title(route, navigator, index, navState){
                return (
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>{route.title}</Text>
                    </View>
                );
            },
        };

        //创建NavigatonBar
        return (
            <Navigator.NavigationBar style={styles.navi} routeMapper = {routeMapper} />
        );
    }

    render () {
        return (
            <Navigator
                initialRoute={{component:MainPage, title:'MainPage'}}
                
                renderScene={this._renderScene}

                navigationBar={this._renderNavBar()}
                
                sceneStyle={{paddingTop: 64}}
            />
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    button:{
        flex:1,
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonText: {
        fontSize:18,
        color:'#ffffff',
        fontWeight:'400',
    },
    navi: {
        alignItems:'center',
        backgroundColor:'#55acee',
        shadowOffset:{
            width:1,
            height:0.5,
        },
        shadowColor:'#55acee',
        shadowOpacity:0.8,        
    }
});

AppRegistry.registerComponent('RN8', () => App);