import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {UPDATEHEADERNAME} from './Redux/actions/indux';
const img = require('./Images/CheckenSecond.webp');
const ArrowLeftIcon = (
  <FontAwesome5
    style={{fontSize: 21, color: '#C2C2C2'}}
    name={'chevron-right'}
    solid
  />
);

export default function ItemsProduct() {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.InnerContainerItemProduct}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(UPDATEHEADERNAME(true,'lllllllllllllllluuuuuuuuuuuuuuu'));
          }}>
          <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{width: '100%', height: 140, borderColor: '#F4CA16'}}
              source={img}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.InnerContainerItemProductTextHolder}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              color: '#030303',
              fontSize: 19,
            }}>
            Chicken Karahi Cut
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              color: '#878787',
              fontSize: 19,
            }}>
            1 kg
          </Text>
          <Text style={styles.InnerContainerItemProductDiscRate}>15% OFF</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                color: '#010101',
                fontSize: 20,
                fontWeight: '700',
              }}>
              Rs 381
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#757575',
                textDecorationLine: 'line-through',
                marginTop: 6,
                marginLeft: 4,
              }}>
              Rs 410
            </Text>
          </View>
          <Text style={styles.InnerContainerItemProductSubmitButton}>
            Add to Cart
          </Text>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </>
  );
}
