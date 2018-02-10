import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ListView,
    ScrollView,
    Image,
} from 'react-native';

import NetUtil from '../NetUtil';

export default class S16View extends Component {

  constructor(props) {
    super(props);

    this.netUtil = new NetUtil();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
    this.state = {
      dataSource: ds,
      loaded: false,
    };
  }

  componentDidMount() {
    let params = '';
    this.netUtil.get("http://127.0.0.1:8888/movie/getmovielist", params, (response)=>{
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response.result.movieList),
          loaded: true,
      });
    });
  }
        
  render() {
    if(!this.state.loaded) {
      return (
        <View>  
          <Text>Loading movies......</Text>  
        </View>  
      );  
    } 

    return (
      <View>
        <ListView 
          dataSource={this.state.dataSource} 
          removeClippedSubviews={false}
          renderRow= {(movie) => 
            <Text>{movie.movieName}</Text>
          } 
          />
      </View>
    );
  }

  renderMovie(movie) { 
    return (  
          <View>  
             <Text style={style2.movieId}>{movie.movieId}</Text>  
             <Text style={style2.movieName}>{movie.movieName}</Text>  
          </View>  
     );  
  }  
};