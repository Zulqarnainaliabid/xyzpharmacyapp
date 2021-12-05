import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../Header';
import {WishListHeart} from '../Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { View, StyleSheet } from 'react-native';
import ProductsBox from '../ProductBox';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const DeleteIcon = (
  <FontAwesome5
    style={{fontSize: 20, color: '#E3926D'}}
    name={'trash-alt'}
    solid
  />
);
const WishListScreen = ({route, navigation}) => {
  const [WishListNamedArray, setWishListNamedArray] = useState ([]);
  const [WishListDefaultArray, setWishListDefaultArray] = useState ([]);
  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  useEffect (() => {
    getData ();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem ('WishlistNames');
      if (value !== null) {
        let data = JSON.parse (value);
        setWishListNamedArray (data);
      }
    } catch (e) {
      console.log ('read error', e);
    }
    try {
      const valueDefault = await AsyncStorage.getItem ('WishlistDaultArray');
      if (valueDefault !== null) {
        let dataDefault = JSON.parse (valueDefault);
        console.log ('def', dataDefault);
        setWishListDefaultArray (dataDefault);
      }
    } catch (e) {
      console.log ('read error', e);
    }
  };

  async function HandleDeleteWishListItem (name) {
    console.log ('name 0', name);
    if (name === 'Default') {
      if (WishListDefaultArray !== null || WishListDefaultArray !== undefined) {
        console.log ('ooooo', WishListDefaultArray);
        let emptyArray = [];
        setWishListDefaultArray (emptyArray);
        await AsyncStorage.setItem (
          'WishlistDaultArray',
          JSON.stringify (emptyArray)
        );
      }
    } else {
      if (WishListNamedArray !== null || WishListNamedArray !== undefined) {
        for (let i = 0; i < WishListNamedArray.length; i++) {
          if (WishListNamedArray[i].name === name) {
            WishListNamedArray.splice (i, 1);
            break;
          }
        }
        await AsyncStorage.setItem (
          'WishlistNames',
          JSON.stringify (WishListNamedArray)
        );
      }
    }
    getData ();
  }

  if (WishListNamedArray.length !== 0 || WishListDefaultArray.length !== 0) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header name={HeaderName} ScreenName={false} EditButton={false} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{color: '#707070', fontSize: 17}}>
                  Default ({WishListDefaultArray.length})
                </Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    onPress={() => {
                      HandleDeleteWishListItem ('Default');
                    }}
                    style={[
                      styles.ViewAllButtonInnercontainerdProduct,
                      styles.ViewAllButtonWishScreen,
                    ]}
                  >
                    {DeleteIcon}
                  </Text>
                  <Text
                    onPress={() => {
                      navigation.navigate ('CatagoriesListSecreen', {
                        name: 'Default Wish List',
                        WishListData:true
                      });
                    }}
                    style={[
                      styles.ViewAllButtonInnercontainerdProduct,
                      styles.ViewAllButtonWishScreen,
                    ]}
                  >
                    View all
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {WishListDefaultArray.map ((item, index) => {
                    return (
                      <View key={index} style={{marginVertical: 12}}>
                        <View style={{marginHorizontal: 5}}>
                          <ProductsBox Data={item} />
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <View>
                {WishListNamedArray.map ((item, index) => {
                  console.log ('8', item);
                  return (
                    <View key={index}>
                      <View key={index} style={{marginVertical: 12}}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Text style={{color: '#707070', fontSize: 17}}>
                            {item.name}({item.Array.length})
                          </Text>
                          <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text
                              onPress={() => {
                                HandleDeleteWishListItem (item.name);
                              }}
                              style={[
                                styles.ViewAllButtonInnercontainerdProduct,
                                styles.ViewAllButtonWishScreen,
                              ]}
                            >
                              {DeleteIcon}
                            </Text>
                            <Text
                              style={[
                                styles.ViewAllButtonInnercontainerdProduct,
                                styles.ViewAllButtonWishScreen,
                              ]}
                              onPress={() => {
                                navigation.navigate ('CatagoriesListSecreen', {
                                  name: item.name,
                                  WishListData:true
                                });
                              }}
                            >
                              View all
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                          >
                            {item.Array.map ((item, index) => {
                              return (
                                <View key={index} style={{marginHorizontal: 5}}>
                                  <ProductsBox Data={item} />
                                </View>
                              );
                            })}
                          </ScrollView>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <Header name={HeaderName} EditButton={false} ScreenName={false} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                {WishListHeart}
              </View>
              <Text
                style={{
                  color: '#FF783E',
                  fontSize: 15,
                  marginVertical: 7,
                  textAlign: 'center',
                }}
              >
                You haven't added any items to your Wish List yet.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default WishListScreen;
