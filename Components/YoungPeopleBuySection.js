import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './Style';
import YoungPeopleBuyBox from './YoungPeopleBuyBox';
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
        <ScrollView horizontal={true}>
          <View style={styles.YoungPeopleBuyBoxOuterWraperScrollView}>
            <YoungPeopleBuyBox HandleGotoTabsCatagoriesListSecreen={props.HandleGotoTabsCatagoriesListSecreen} />
            <YoungPeopleBuyBox HandleGotoTabsCatagoriesListSecreen={props.HandleGotoTabsCatagoriesListSecreen}/>
            <YoungPeopleBuyBox HandleGotoTabsCatagoriesListSecreen={props.HandleGotoTabsCatagoriesListSecreen}/>
            <YoungPeopleBuyBox HandleGotoTabsCatagoriesListSecreen={props.HandleGotoTabsCatagoriesListSecreen}/>
            {/* <YoungPeopleBuyBox />
              <YoungPeopleBuyBox /> */}
            {/* <View style={styles.YoungPeopleBuyBoxOuterWraperImageHolder}>
                <YoungPeopleBuyBox />
              </View> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
