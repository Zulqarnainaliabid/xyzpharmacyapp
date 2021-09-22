import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import TopBrandBox from './TopBrandBox';
const img = require('./Images/UnileverBrand.webp');
export default function TopBrand(props) {
  return (
    <>
      <View style={{padding: 12}}>
        <Text style={styles.ProductNameButtonInnercontainerdProduct}>Top Brand</Text>
        <View style={styles.InnercontainerdBrand}>
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
          <TopBrandBox HandleGotoBrandListSecreen={props.HandleGotoBrandListSecreen} />
        </View>
      </View>
    </>
  );
}
