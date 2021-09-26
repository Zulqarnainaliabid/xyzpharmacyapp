import {Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ArrowDownIcon = (
  <FontAwesome5
    style={{fontSize: 16, color: '#444444'}}
    name={'chevron-down'}
    solid
  />
);
export default function FaqsBox(props) {
  const [ToggleFaq, setToggleFaq] = useState(false);
  const leftValue = useState(new Animated.Value(0))[0];
  function MoveBall() {
    if (ToggleFaq) {
      Animated.timing(leftValue, {
        toValue: 70,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(leftValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }
  return (
    <View style={{flex: 1, paddingVertical: 8, paddingHorizontal: 7}}>
      <View style={styles.OutercontainerFaq}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setToggleFaq(!ToggleFaq);
            MoveBall();
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 12,
            }}>
            <Text style={{fontSize: 17, color: '#444444', width: 327}}>
              {props.data.Question}
            </Text>
            <Text style={{marginTop: 4}}>{ArrowDownIcon}</Text>
          </View>
        </TouchableOpacity>
        <Animated.View
          style={[
            {
              height: leftValue,
            },
          ]}>
          <Text style={{fontSize: 15, color: '#444444'}}>{props.data.Ans}</Text>
        </Animated.View>
      </View>
    </View>
  );
}
