import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
import {TempDataCategoriesTag} from '../TempData'
const CatagoriesListSecreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');

  return (
    <View>
      <Header name={HeaderName} EditButton={false} ScreenName={true} />
      <ScrollView>
        <View style={{ flex: 1,backgroundColor:"white"}}>
        {TempDataCategoriesTag &&
              TempDataCategoriesTag.map((item, index) => {
                return <ItemsProduct key={index} Data={item} />;
              })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CatagoriesListSecreen;
