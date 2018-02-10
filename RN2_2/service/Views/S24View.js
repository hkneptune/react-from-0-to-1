import React, {
    Component
} from 'react';

import {
    View,
    Text,
} from 'react-native';

export default class S24View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: 0,
      movieName: "",
    };
  }

  componentDidMount() {
    let url = 'http://127.0.0.1:8888/movie/getmoviedetail?cityId=1'; 
    this.fetchdata(url);
  }

  fetchdata(url) {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {        
        console.log(responseData.result.movieId);
        console.log(responseData.result.movieName);

        this.setState({ 
          movieId: responseData.result.movieId, 
          movieName: responseData.result.movieName});
      })
      .done();
  }
        
  render() {
    return (
      <View>
        <Text>{this.state.movieId}</Text>
        <Text>{this.state.movieName}</Text>
      </View>
    );
  }
};