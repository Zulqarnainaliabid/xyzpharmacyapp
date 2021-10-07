import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
import {TempDataFruitsAndVegatblesOuter} from '../TempData'
const img = require('../Images/UnileverBrand.webp');
const DrawerCategoriesScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
        EditButton={false}
      />

      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {TempDataFruitsAndVegatblesOuter &&
            TempDataFruitsAndVegatblesOuter.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -5,
                    marginVertical: 5,
                  }}>
                  <CatagoriesTag Data={item} />
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerCategoriesScreen;
