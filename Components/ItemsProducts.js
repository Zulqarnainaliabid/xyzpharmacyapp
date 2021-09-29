import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const img = require('./Images/CheckenSecond.webp');
const ArrowLeftIcon = (
  <FontAwesome5
    style={{fontSize: 17, color: '#C2C2C2'}}
    name={'chevron-right'}
    solid
  />
);

export default function ItemsProduct() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.InnerContainerItemProduct}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push('DetailsSecreenSecreen', {
              name: 'lllllllllllllllluuuuuuuuuuuuuuu',
            });
          }}>
          <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{
                width: '100%',
                height: 120,
                borderColor: '#F4CA16',
              }}
              source={img}
            />
            <View
              style={{display: 'flex', flexDirection: 'row', marginLeft: 12}}>
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
                  marginTop: 4,
                  marginLeft: 4,
                }}>
                Rs 410
              </Text>
              <Text style={styles.InnerContainerItemProductSubmitButton}>
                Add to Cart
              </Text>
            </View>
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
              color: '#878787',
              fontSize: 17,
            }}>
            1 kg
          </Text>
          <Text style={styles.InnerContainerItemProductDiscRate}>15% OFF</Text>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </>
  );
}
