import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // 'https://images.unsplash.com/photo-1591361795351-cc722122c1d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2MzI3MDM5NDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        // 'https://source.unsplash.com/1024x768/?girl',
        // 'https://source.unsplash.com/1024x768/?tree',
        // 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2MzI3MDM5OTk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
        // 'https://images.unsplash.com/photo-1535704882196-765e5fc62a53?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2MzI2NTU4MjE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
      ],
    };
  }

  render() {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:7,
        }}>
        <View style={styles.container}>
          <SliderBox
            circleLoop={true}
            ImageComponentStyle={{
              height: '100%',
              width: '94%',
              borderRadius: 3,
              // borderWidth: 1,
            }}
            dotStyle={{display: 'none'}}
            autoplay={true}
            images={this.state.images}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // width: 200,
    height: 150,
  },
});
