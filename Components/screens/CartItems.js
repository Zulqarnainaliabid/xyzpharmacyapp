import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddToCart from '../AddToCart';
export default function CartItems (props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          borderBottomWidth: 2,
          borderColor: '#C2C1C5',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'row',
          width:"100%"
        }}
      >
        <View style={{paddingVertical: 15, paddingLeft: 25, paddingRight: 10}}>
          <View style={{width: 110, height: 115}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderColor: '#F4CA16',
              }}
              source={props.CartData.img}
            />
          </View>
        </View>
        <View style={{paddingVertical: 15,width:200}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '700',
            }}
          >
            {props.CartData.titleName}
          </Text>
          <Text
            style={{
              color: '#7F7F7F',
              fontSize: 15,
              fontWeight: '700',
              marginVertical: 4,
            }}
          >
            {props.CartData.productWaight}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              width: 70,
              paddingVertical: 3,
              textAlign: 'center',
              borderRadius: 12,
              fontWeight: '700',
              backgroundColor: '#E5003A',
            }}
          >
            {props.CartData.dic} %OFF
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                color: '#E80201',
                fontSize: 17,
                fontWeight: '700',
                textAlignVertical: 'center',
              }}
            >
              Rs {props.CartData.actualPrice}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#757575',
                textDecorationLine: 'line-through',
                marginLeft: 5,
                textAlignVertical: 'center',
                // marginRight: 12,
              }}
            >
              Rs {props.CartData.lessPrice}
            </Text>
          </View>
          <View style={{marginTop:-6,width:170,alignSelf:"center"}}>
          <AddToCart Data={props.CartData} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}