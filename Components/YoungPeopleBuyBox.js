import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require ('./Images/ColdDrink.webp');
export default function YoungPeopleBuyBox (props) {
  const navigation = useNavigation ();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate ('TabsCatagoriesList', {
            name: 'Cold Drink',
            otherData: props.Data,
          });
        }}
      >
        <View style={styles.YoungPeopleBuyBoxOuterWraperImageHolder}>
          <View style={{height:100,width:90}}>
            <Image

              style={{
                width: '100%',
                height: '100%',
                // flex: 1,
                resizeMode: 'contain',
              }}
              source={props.Data.img}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 6,
              color: '#777777',
              fontWeight: '500',
            }}
          >
            {props.Data.titleName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
