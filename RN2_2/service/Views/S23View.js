import React, {
    Component
} from 'react';

import {
    View,
    Text,
    ListView,
} from 'react-native';

export default class S23View extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
    this.state = {
      dataSource: ds.cloneWithRows(['baobao', 'jianqiang'])
    };
  }
        
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView dataSource = {this.state.dataSource} 
          renderRow = {(rowData) => 
            <Text>{rowData}</Text>
          } 
          />
      </View>
    );
  }
};
