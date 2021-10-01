import React from 'react';
import {Text, View} from 'react-native';
import TopBrandBox from './TopBrandBox';
import {TempDataTopBrand} from './TempData'
export default function TopBrand(props) {
  return (
    <>
      <View style={{padding: 12}}>
        <Text style={styles.ProductNameButtonInnercontainerdProduct}>Top Brand</Text>
        <View style={styles.InnercontainerdBrand}>
          {TempDataTopBrand.map((item,index)=>{
            return  <TopBrandBox key={index} Data={item} />
          })}
        </View>
      </View>
    </>
  );
}
