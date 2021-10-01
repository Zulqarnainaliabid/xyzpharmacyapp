import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require('./Images/UnileverBrand.webp');
export default function TopBrandBox(props) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('BrandListScreen', {
            name: 'Uniliver',
            otherData:props.Data,
          });
        }}>
        <View style={styles.TopBrandOuterWraperImageHolder}>
          <View style={styles.TopBrandImageHolder}>
            <Image
              style={{width: '100%', height: 60}}
              source={props.Data.img}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              marginTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 1,
              width: 95,
              color: '#8F8F8F',
              borderColor: '#8F8F8F',
            }}>
            {props.Data.titleName}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
