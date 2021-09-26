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
            <Image style={{width: '100%', height: 60}} source={img} />
          </View>
          <Text style={{textAlign: 'center',fontSize:13, marginTop: 10,paddingBottom:10,borderBottomWidth: 1,width:95,color:"#8F8F8F",borderColor:"#8F8F8F"}}>Unilever (568)</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
