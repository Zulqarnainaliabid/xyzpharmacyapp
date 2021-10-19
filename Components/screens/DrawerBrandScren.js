import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import TopBrandBox from '../TopBrandBox';
import {TempDataTopBrand} from '../TempData';
const img = require('../Images/UnileverBrand.webp');
const DrawerBrandScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} EditButton={false} ScreenName={false} />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              paddingHorizontal: 12,
            }}>
            {TempDataTopBrand.map((item, index) => {
              return (
                <View  key={index} style={{marginVertical: 7}}>
                  <TopBrandBox key={index} Data={item} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerBrandScreen;
