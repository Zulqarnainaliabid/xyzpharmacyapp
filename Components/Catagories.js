import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
const img = require('./Images/Rx.jpg');
export default function Catagories() {
  return (
    <>
     <View style={styles.TopBrandOuterWraperImageHolder}>
        <View style={styles.TopBrandImageHolder}>
          <Image style={{width: '100%', height: 100}} source={img} />
        </View>
        <Text style={{textAlign:"center",marginTop:14}}>Unilever</Text>
      </View>
    </>
  );
}
