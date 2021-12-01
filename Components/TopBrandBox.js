import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require ('./Images/UnileverBrand.webp');
export default function TopBrandBox (props) {
  const navigation = useNavigation ();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate ('BrandListScreen', {
            name: 'Uniliver',
            otherData: props.Data,
          });
        }}

      >
        <View style={{
           borderColor: '#C0C0C0',
           marginBottom: 16,
          //  marginTop: 8,
           marginHorizontal: 5,
          //  width: 80,
          // borderWidth:1,
          borderColor: '#8F8F8F',
          borderBottomWidth: 1,
        }}>
          <View style={{width:90,height:50}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={props.Data.img}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              marginTop: 10,
              paddingBottom: 10,
              // width: 95,
              color: '#8F8F8F',
            }}
          >
            {props.Data.titleName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
