import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
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
            {props.Data.selected
              ? <View style={[styles.OuterWraperProductBoxDeleteButton]}>
                  <View style={{height: 20, width: 20}}>
                    {togglePlusMinusButton
                      ? <TouchableOpacity
                          onPress={() => {
                            let temp = props.AllData;
                            let Quantity =
                              temp[props.outerIndex].data[props.index].Quantity;
                            Quantity = Quantity - 1;
                            temp[props.outerIndex].data[
                              props.index
                            ].Quantity = Quantity;
                            storeData (temp);
                          }}
                        >
                          <Image
                            style={{
                              width: '100%',
                              height: '100%',
                              flex: 1,
                              resizeMode: 'contain',
                            }}
                            source={MinusIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>
                      : <TouchableOpacity
                          onPress={() => {
                            let temp = props.AllData;
                            temp[props.outerIndex].data[
                              props.index
                            ].selected = false;
                            storeData (temp);
                            handleRemoveBookmark (props.Data.Id);
                          }}
                        >
                          <Image
                            style={{
                              width: '100%',
                              height: '100%',
                              flex: 1,
                              resizeMode: 'contain',
                            }}
                            source={DeleteIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>}
                  </View>
                  <Text style={{color: '#000000'}}>
                    {
                      props.CartData[props.outerIndex].data[props.index]
                        .Quantity
                    }
                  </Text>
                  <View style={{height: 20, width: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        let temp = props.CartData;
                        let Quantity =
                          temp[props.outerIndex].data[props.index].Quantity;
                        Quantity = Quantity + 1;
                        temp[props.outerIndex].data[
                          props.index
                        ].Quantity = Quantity;
                        storeData (temp);
                      }}
                    >
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          flex: 1,
                          resizeMode: 'contain',
                        }}
                        source={PlusIconPic}
                        tintColor="#00C41A"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              : <TouchableOpacity
                  style={styles.OuterWraperSubmitButtonProductBox}
                  onPress={() => {
                    let temp = props.CartData;
                    temp[props.outerIndex].data[props.index].selected = true;
                    storeData (temp);
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    }}
                  >
                    Add to Cart
                  </Text>
                </TouchableOpacity>}
          </View>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </SafeAreaView>
  );
}
