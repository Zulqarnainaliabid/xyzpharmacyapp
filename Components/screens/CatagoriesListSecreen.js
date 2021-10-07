import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';

const CatagoriesListSecreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');

  return (
    <View>
      <Header name={HeaderName} EditButton={false} ScreenName={true} />
      <ScrollView>
        <View style={styles.OuterContainerCatagoriesList}>
          <ItemsProduct />
          <ItemsProduct />
          <ItemsProduct />
          <ItemsProduct />
        </View>
      </ScrollView>
    </View>
  );
};

export default CatagoriesListSecreen;
