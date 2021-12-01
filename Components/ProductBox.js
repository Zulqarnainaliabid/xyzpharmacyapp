import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddToCart from './AddToCart';
export default function ProductsBox (props) {
  const navigation = useNavigation ();
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <View style={styles.OuterContainerProductBox}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              // setData ();
              // setName (props.Data.titleName);
              navigation.push ('DetailsSecreenSecreen', {
                name: '',
                otherData: props.Data,
              });
            }}
          >
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={styles.ImageHolderOuterContainerProductBox}>
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
            </View>
          </TouchableHighlight>
          <View style={styles.TextHolderProductBox}>
            <Text numberOfLines={1} style={{fontSize: 15, color: '#9b9b9b'}}>
              {props.Data.titleName}
            </Text>
            <Text>{props.Data.productWaight} Kg</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'red',
                  fontWeight: '700',
                  marginTop: 9,
                  marginRight: 5,
                }}
              >
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 13,
                  textDecorationLine: 'line-through',
                }}
              >
                Rs {props.Data.lessPrice}
              </Text>
            </View>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                fontWeight: '700',
                fontSize: 11,
                width: 60,
                textAlign: 'center',
                borderRadius: 10,
                paddingVertical: 3,
                paddingHorizontal: 4,
                marginTop: 4,
              }}
            >
              {props.Data.dic} % OFF
            </Text>
          </View>
          <View>
            <AddToCart item={props.Data} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
