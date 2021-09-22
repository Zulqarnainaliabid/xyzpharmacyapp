import React from 'react';
import {Text, View, Image, ScrollView , TouchableOpacity} from 'react-native';
const img = require('./Images/UnileverBrand.webp');
export default function TopBrandBox(props) {
  return (
    <>
    
      <TouchableOpacity style={styles.button} onPress={()=>{
      props.HandleGotoBrandListSecreen("Unilever")
      }}>
        <View style={styles.TopBrandOuterWraperImageHolder}>
          <View style={styles.TopBrandImageHolder}>
            <Image style={{width: '100%', height: 70}} source={img} />
          </View>
          <Text style={{textAlign: 'center', marginTop: 14}}>Unilever</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
