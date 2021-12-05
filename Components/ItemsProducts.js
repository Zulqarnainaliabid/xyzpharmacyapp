import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AddToCart from './AddToCart'
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const DeleteIconPic = require ('./Images/delete.png');
const PlusIconPic = require ('./Images/plus.png');
const MinusIconPic = require ('./Images/minusPic.png');
const ArrowLeftIcon = (
  <FontAwesome5
    style={{fontSize: 17, color: '#C2C2C2'}}
    name={'chevron-right'}
    solid
  />
);

export default function ItemsProduct (props) {
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (false);
  const navigation = useNavigation ();

  useEffect (
    () => {
      // getQuantityData()
      if (props.Data.Quantity >= 2) {
        settogglePlusMinusButton (true);
      } else {
        settogglePlusMinusButton (false);
      }
    },
    [props.Data.Quantity]
  );
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.InnerContainerItemProduct}>
        <TouchableOpacity
          onPress={() => {
            navigation.push ('DetailsSecreenSecreen', {
              name: 'lllllllllllllllluuuuuuuuuuuuuuu',
              otherData: props.Data,
            });
          }}
        >
          <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{
                width: '100%',
                height: 120,
                borderColor: '#F4CA16',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={props.Data.img}
            />
            <View
              style={{display: 'flex', flexDirection: 'row', marginLeft: 5}}
            >
              <Text
                style={{
                  color: '#E80201',
                  fontSize: 20,
                  fontWeight: '700',
                }}
              >
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#757575',
                  textDecorationLine: 'line-through',
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                Rs {props.Data.lessPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{marginLeft: 6, width: 165}}>
          <TouchableOpacity
            onPress={() => {
              navigation.push ('DetailsSecreenSecreen', {
                otherData: props.Data,
              });
            }}
          >
            <View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: '#030303',
                  fontSize: 19,
                }}
              >
                {props.Data.titleName}
              </Text>
              <Text
                style={{
                  color: '#878787',
                  fontSize: 17,
                }}
              >
                {props.Data.productWaight}
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.InnerContainerItemProductDiscRate}>
                {props.Data.dic} %OFF
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 18}}>
            <View>
              <AddToCart item={props.Data} />
            </View>
          </View>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </SafeAreaView>
  );
}
