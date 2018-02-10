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

export default class S15View extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
    this.state = {
      dataSource: ds,
      loaded: false,
    };
  }

  componentDidMount() {
    let url = 'http://127.0.0.1:8888/movie/getmovielist'; 
    this.fetchdata(url);
  }

  fetchdata(url) {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.result.movieList),
          loaded: true,
          });
        console.log(this.state.dataSource);
      })
      .done();
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