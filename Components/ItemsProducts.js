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

export default function ItemsProduct(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.InnerContainerItemProduct}>
      <TouchableOpacity
            onPress={() => {
              navigation.push('DetailsSecreenSecreen', {
                name: 'lllllllllllllllluuuuuuuuuuuuuuu',
                otherData:props.Data,
              });
            }}>
        <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{
                width: '100%',
                height: 120,
                borderColor: '#F4CA16',
              }}
              source={props.Data.img}
            />
            <View
              style={{display: 'flex', flexDirection: 'row', marginLeft: 5}}>
              <Text
                style={{
                  color: '#E80201',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#757575',
                  textDecorationLine: 'line-through',
                  marginTop: 5,
                  marginLeft:5
                }}>
                Rs {props.Data.lessPrice}
              </Text>
            </View>
        </View>
        </TouchableOpacity>
        <View style={{marginLeft: 6, width: 177}}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('DetailsSecreenSecreen', {
                otherData:props.Data,
              });
            }}>
            <View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: '#030303',
                  fontSize: 19,
                }}>
                {props.Data.titleName}
              </Text>
              <Text
                style={{
                  color: '#878787',
                  fontSize: 17,
                }}>
                {props.Data.productWaight}
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.InnerContainerItemProductDiscRate}>
                {props.Data.dic} %OFF
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop:18}}>
            <Text style={styles.InnerContainerItemProductSubmitButton}>
              Add to Cart
            </Text>
          </View>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </>
  );
}
