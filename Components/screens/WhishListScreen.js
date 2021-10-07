import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../Header';
import {WishListHeart} from '../Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
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
  const [WishListArray, setWishListArray] = useState([]);
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const UpdateArrayWishListScreen = useSelector(
    state => state.UpdateArrayWishListScreen,
  );

  console.log('WishList Array.  new n n', UpdateArrayWishListScreen);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('WishList');
        if (value !== null) {
          let data = JSON.parse(value);
          console.log('WishList . .', data);
          setWishListArray(data);
        }
      } catch (e) {
        console.log('read error', e);
      }
    };
    getData();
  }, []);

  if (WishListArray.length !== 0) {
    return (
      <View style={{flex: 1}}>
        <Header name={HeaderName} ScreenName={false} EditButton={false} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            padding: 10,
            justifyContent: 'center',
            backgroundColor: '#FAFAFA',
            borderWidth: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              {WishListArray.map((item, index) => {
                return (
                  <>
                    <View style={{marginVertical: 12}}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: '#707070', fontSize: 17}}>
                          {item.name}
                        </Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Text
                            style={[
                              styles.ViewAllButtonInnercontainerdProduct,
                              styles.ViewAllButtonWishScreen,
                            ]}>
                            {DeleteIcon}
                          </Text>
                          <Text
                            style={[
                              styles.ViewAllButtonInnercontainerdProduct,
                              styles.ViewAllButtonWishScreen,
                            ]}>
                            View all
                          </Text>
                        </View>
                      </View>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <View style={{marginHorizontal: 5}}>
                          <ProductsBox Data={item.value} />
                        </View>
                        <View style={{marginHorizontal: 5}}>
                          <ProductsBox Data={item.value} />
                        </View>
                        <View style={{marginHorizontal: 5}}>
                          <ProductsBox Data={item.value} />
                        </View>
                        <View style={{marginHorizontal: 5}}>
                          <ProductsBox Data={item.value} />
                        </View>
                      </ScrollView>
                    </View>

                    <View style={{marginVertical: 12}}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: '#707070', fontSize: 17}}>
                          {item.name}
                        </Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Text
                            style={[
                              styles.ViewAllButtonInnercontainerdProduct,
                              styles.ViewAllButtonWishScreen,
                            ]}>
                            {DeleteIcon}
                          </Text>
                          <Text
                            style={[
                              styles.ViewAllButtonInnercontainerdProduct,
                              styles.ViewAllButtonWishScreen,
                            ]}>
                            View all
                          </Text>
                        </View>
                      </View>
                      <ProductsBox Data={item.value} />
                    </View>
                  </>
                );
              })}
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
          }}>
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
                }}>
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
