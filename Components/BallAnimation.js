import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';

export default function AnimationBall() {
  const [ballAnimation, setballAnimation] = useState(new Animated.Value(0));
  const leftValue = useState(new Animated.Value(0))[0];
  function MoveBall() {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              marginLeft: leftValue,
              borderWidth: 100 / 2,
              backgroundColor: 'red',
            },
          ]}></Animated.View>
      </View>
      <TouchableOpacity style={styles.button} onPress={MoveBall}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
