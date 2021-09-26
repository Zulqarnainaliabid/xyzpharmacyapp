import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
        // require('./assets/images/girl.jpg'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          circleLoop={true}
          ImageComponentStyle={{width:"96%",borderRadius: 5,height:180,borderRadius:5}}
          dotStyle={{display: 'none'}}
          autoplay={true}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // borderWidth: 3,
    borderColor: "#20232a",
    flexDirection:"column",
    alignItems: 'center',
    height:180,
    // borderWidth:1,
    marginTop:5
  },
});
