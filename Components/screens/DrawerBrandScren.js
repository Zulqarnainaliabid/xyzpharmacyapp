import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import TopBrandBox from '../TopBrandBox';
const img = require('../Images/UnileverBrand.webp');
const DrawerBrandScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');

  const ItemAray = [1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{display: 'flex', flexDirection: 'row',justifyContent:"center", flexWrap:"wrap",paddingHorizontal:12}}>
            {ItemAray.map((item, index) => {
              return (
                <View style={{marginVertical: 7}} key={index}>
                  <TopBrandBox
                  // HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen}
                  />
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
