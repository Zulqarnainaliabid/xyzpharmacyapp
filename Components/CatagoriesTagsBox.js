import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require ('./Images/Vagetable.webp');
export function CatagoriesTagsBoxFun (props) {
  const navigation = useNavigation ();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate ('VegetablesAndFruitScreen', {
            name: 'Vegetables & Fruit',
          });
        }}
      >
        <View
          style={{
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderColor: '#EDEDED',
            padding: 10,
            width: 113,
            height: 90,
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
            }}
            source={props.Data.img}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontSize: 12,
              color: '#757575',
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
export default function CatagoriesTagsBox (props) {
  return (
    <View>
      <View style={styles.CatagoriesTagBoxOuterContainer}>
        {props.DataArry &&
          props.DataArry.map ((item, index) => {
            return <CatagoriesTagsBoxFun key={index} Data={item} />;
          })}

      </View>
    </View>
  );
}
