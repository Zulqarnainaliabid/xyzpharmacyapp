import React from 'react';
import {Text, View, Image, ScrollView , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require('./Images/ColdDrink.webp');
export default function YoungPeopleBuyBox(props) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate('TabsCatagoriesList', {
            name: "Cold Drink",
          });
      }}>
        <View style={styles.YoungPeopleBuyBoxOuterWraperImageHolder}>
          <View style={styles.YoungPeopleBuyBoxImageHolder}>
            <Image style={{width: '100%', height: 69}} source={img} />
          </View>
          <Text style={{textAlign: 'center', marginTop: 6,color:"#777777",fontWeight:"500"}}>Cold Drinks</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
