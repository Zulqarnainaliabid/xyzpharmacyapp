import React from 'react';
import {Text, View, Image, ScrollView , TouchableOpacity} from 'react-native';
const img = require('./Images/ColdDrink.webp');
export default function YoungPeopleBuyBox(props) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={()=>{
        props.HandleGotoTabsCatagoriesListSecreen("Cold Drink")
      }}>
        <View style={styles.YoungPeopleBuyBoxOuterWraperImageHolder}>
          <View style={styles.YoungPeopleBuyBoxImageHolder}>
            <Image style={{width: '100%', height: 77}} source={img} />
          </View>
          <Text style={{textAlign: 'center', marginTop: 6}}>Cold Drink</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
