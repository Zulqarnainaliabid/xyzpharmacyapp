import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require('./Images/Vagetable.webp');
export function CatagoriesTagsBoxFun(props) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('VegetablesAndFruitScreen', {
            name: 'Vegetables & Fruit',
          });
        }}>
        <View style={styles.CataGoriesTagBoxImageHolder}>
          <Image style={{width: '100%', height: 80}} source={props.Data.img} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontSize: 12,
              color: '#757575',
              fontWeight: '500',
            }}>
              {props.Data. titleName}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
export default function CatagoriesTagsBox(props) {
  return (
    <>
      <View style={styles.CatagoriesTagBoxOuterContainer}>
        {props.DataArry && props.DataArry.map((item,index)=>{
          return  <CatagoriesTagsBoxFun
          key={index}
          Data={item}
          />
        })}
       
      </View>
    </>
  );
}
