import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
const img = require('../Images/UnileverBrand.webp');

const BrandListScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const ItemAray = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View style={{display: 'flex', alignItems: 'center', padding: 10}}>
        <View style={styles.BrandListScreenImageHolder}>
          <Image
            style={{width: '100%', height: 110, borderColor: '#F4CA16'}}
            source={img}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.BrandListTagsTextHolder}>All</Text>
          <Text style={styles.BrandListTagsTextHolder}>Shampoo (39)</Text>
          <Text style={styles.BrandListTagsTextHolder}>Soaps (18)</Text>
          <Text style={styles.BrandListTagsTextHolder}>Tea (20)</Text>
          <Text style={styles.BrandListTagsTextHolder}>
            Kiktchen Cleaning (20)
          </Text>
          <Text style={styles.BrandListTagsTextHolder}>Loundry (20)</Text>
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {ItemAray.map((item, index) => {
            return <ItemsProduct key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default BrandListScreen;
