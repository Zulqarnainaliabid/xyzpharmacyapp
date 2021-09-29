import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import FaqsScreen from './FaqsScreen';
const img = require('../Images/UnileverBrand.webp');
const DrawerFaqsScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 12}}>
          <Text
            style={{
              backgroundColor: '#D7D7D7',
              marginHorizontal: -11,
              padding: 12,
              fontSize: 18,
            }}>
            About US
          </Text>
          <View style={{paddingHorizontal: 5}}>
            <FaqsScreen />
          </View>
        </View>
        <View
          style={{flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 12}}>
          <Text
            style={{
              backgroundColor: '#D7D7D7',
              marginHorizontal: -11,
              padding: 12,
              fontSize: 18,
            }}>
            About US
          </Text>
          <View style={{paddingHorizontal: 5}}>
            <FaqsScreen />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerFaqsScreen;
