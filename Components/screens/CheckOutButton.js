import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
const img = require ('../Images/next.png');
export default function CheckOutButton () {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          color: '#FFFFFF',
          textAlign: 'center',
          backgroundColor: '#FF783E',
          paddingVertical: 14,
          paddingHorizontal: 17,
          marginVertical: 20,
          borderRadius: 3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width:320,
          alignSelf:"center"
        }}
      >
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:230}}>
          <Text style={{fontSize:16,color:"#FFFFFF"}}>
            CHECKOUT
          </Text>
          <Text  style={{fontSize:16,color:"#FFFFFF"}}>
            Rs 32313
          </Text>
        </View>
        <View style={{marginLeft:13,borderLeftWidth:1,paddingLeft:12,marginVertical:-12}}>
        <View style={{width: 25, height: 20,marginTop:11}}>
          <Image style={{width: '100%', height: '100%',tintColor:"#FFFFFF"}} source={img} />
        </View>
        </View>
      </View>
    </View>
  );
}
