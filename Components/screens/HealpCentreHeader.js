import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require ('../Images/close.png');
const Backimg = require ('../Images/BackImageLiveChate.jpg');
export default function HealpCentreHeader (props) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={Backimg}
        style={{
          width: '100%',
          // height: '30%',
          justifyContent: 'center',
          borderWidth: 1,
          paddingVertical: 14,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 25,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.setToggleScreenHelpCentre (false);
            }}
          >
            <View style={{width: 15, height: 15}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={img}
                tintColor="white"
              />
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', marginHorizontal: 20, fontSize: 20}}>
            Healp Centre
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
