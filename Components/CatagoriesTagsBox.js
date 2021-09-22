import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
const img = require('./Images/Vagetable.webp');
export function CatagoriesTagsBoxFun() {
  return (
    <>
      <View style={styles.CataGoriesTagBoxImageHolder}>
        <Image style={{width: '100%', height: 80}} source={img} />
        <Text style={{textAlign: 'center', marginTop: 10, fontSize:12,color:"#757575"}}>Vegetables</Text>
      </View>
    </>
  );
}
export default function CatagoriesTagsBox() {
  return (
    <>
      <View style={styles.CatagoriesTagBoxOuterContainer}>
        <CatagoriesTagsBoxFun />
        <CatagoriesTagsBoxFun />
        <CatagoriesTagsBoxFun />
        <CatagoriesTagsBoxFun />
      </View>
    </>
  );
}
