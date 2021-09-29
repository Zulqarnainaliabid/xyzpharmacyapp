import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
const img = require('../Images/UnileverBrand.webp');
const DrawerCategoriesScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');

  function HandleGotoTabsVegetablesAndFruitsSecreen(name) {
    navigation.navigate('VegetablesAndFruitScreen', {
      name: name,
    });
  }
  const ItemAray = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />

      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {ItemAray.map((item, index) => {
            return (
              <View style={{marginVertical:7}}>
                <CatagoriesTag key={index} HandleGotoTabsVegetablesAndFruitsSecreen={HandleGotoTabsVegetablesAndFruitsSecreen} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerCategoriesScreen;
