import React,{Component} from 'react';
import {View,Image,StyleSheet,Dimensions} from 'react-native';
import PageUtil from 'PageUtil';
import MainPage from 'MainPage';

export default class SplashPage extends Component {

    constructor(props) {
        super(props);
        this.pageUtil = new PageUtil();
    }

    componentDidMount() {
        // 由于是模拟从闪屏跳转到主页，这里使用计时器跳转，延时3秒
        this.timer = setTimeout(()=>{
            // 使用工具类进行页面跳转
            this.pageUtil.jumpPageWithComponent(MainPage,{title: '主页'})
        },3000)
    }

    componentWillUnmount() {
        // 页面销毁的时候解绑计时器
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let {width,height} = Dimensions.get("window");
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../res/image/image_splash.png')}
                    style={{width:width, height:height}}
                    resizeMode='cover'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    }
})