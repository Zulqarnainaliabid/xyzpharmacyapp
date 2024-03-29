import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './Style';
import YoungPeopleBuyBox from './YoungPeopleBuyBox';
import {TempDataYoungPeopleBuy} from './TempData'
export default function YoungPeopleBuySection(props) {
  return (
    <>
     <View style={{paddingTop:12,paddingLeft:12}}>
      <Text style={styles.ProductNameButtonInnercontainerdProduct}>
        Young People Buy
      </Text>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.YoungPeopleBuyBoxOuterWraperScrollView}>
            {TempDataYoungPeopleBuy && TempDataYoungPeopleBuy.map((item,index)=>{
              return<YoungPeopleBuyBox key={index} Data={item} />
            })}
            
          </View>
        </ScrollView>
      </View>
    </>
  );
}
