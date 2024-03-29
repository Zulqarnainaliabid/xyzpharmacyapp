import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import CatagoriesTagsBox from './CatagoriesTagsBox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const img = require('./Images/Teetock.webp');
const ArrowDownIcon = (
  <FontAwesome5 style={{fontSize: 12}} name={'chevron-down'} solid />
);
export default function CatagoriesTag(props) {
  const [ballAnimation, setballAnimation] = useState(new Animated.Value(0));
  const [ToggleArrow, setToggleArrow] = useState(false);
  const [ToggleColor, setToggleColor] = useState(false);
  const animateBall = () => {
    if (!ToggleArrow) {
      setToggleColor(true);
      Animated.timing(ballAnimation, {
        toValue: 180,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setToggleColor(false);
      Animated.timing(ballAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };
  const ballInterpolateStyle = ballAnimation.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '90deg'],
  });
  const ballAnimationFun = {
    transform: [
      {
        rotate: ballInterpolateStyle,
      },
    ],
  };
  return (
    <View style={{backgroundColor: ToggleColor ? '#FEFCC9' : '#FFFFFF'}}>
      <TouchableOpacity
        onPress={() => {
          setToggleArrow(!ToggleArrow);
          animateBall();
        }}>
        <View style={styles.InnerContainerCatagoriesTagBoxImageHolder}>
          <View style={styles.CatagoriesTags}>
            <Image
              style={{width: '100%', height: "100%",flex: 1,
              resizeMode: 'contain',}}
              source={props.Data.img}
            />
          </View>
          <View style={styles.CatagoriesTagBoxTextHolder}>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  marginTop: 14,
                  marginLeft: 10,
                  fontSize: 17,
                  // borderWidth:1,
                  width:211,
                }}>
                {props.Data.titleName}
              </Text>
              <Text style={styles.CatagoriesTagTextHolder}>
                {props.Data.Discrption}
              </Text>
            </View>
            <View style={styles.CatagoriesTagBoxArrowIconHolder}>
              <Animated.View style={[styles.box, ballAnimationFun]}>
                <Text style={styles.Icon}>{ArrowDownIcon}</Text>
              </Animated.View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {ToggleArrow && (
        <View>
          <CatagoriesTagsBox DataArry={props.Data.FruitsAndVegatblesInner} />
        </View>
      )}
    </View>
  );
}
