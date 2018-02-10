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
  render() {
    // Define the callback function.
    const AreaOfCircle = (radius) => {    
      let area = Math.PI * (radius * radius);
      return area.toFixed(0);
    } 

    // Create an array.
    const radii = [10, 20, 30];

    // Get the areas from the radii.
    let areas = radii.map(AreaOfCircle);

    return (
      <View>
        <Text>{areas[0]}</Text> 
        <Text>{areas[1]}</Text> 
        <Text>{areas[2]}</Text> 
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