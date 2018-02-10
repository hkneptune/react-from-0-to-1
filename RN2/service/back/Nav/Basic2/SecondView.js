import React, {
    Component
} from 'react';

import {
    TouchableHighlight,
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SecondView extends Component{
    constructor(props) {
        super(props);

        this.state = {
            userId : null,
            userName : null
        };
    }

    componentDidMount() {
        this.setState({
            userId:this.props.userId,
            userName:this.props.userName
        });
    }

    _onClickBack () {
        this.props.navigator.pop();
    }

    render(){
        return(
            <View>
                <Text style={styles.text}>UserId: { this.state.userId }</Text>
                <Text style={styles.text}>UserName: { this.state.userName }</Text>
                <TouchableOpacity onPress={this._onClickBack.bind(this)}>
                    <Text style={styles.text}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        lineHeight:100
    },
});