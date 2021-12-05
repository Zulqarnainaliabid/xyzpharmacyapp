import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
import {TempDataCategoriesTag} from '../TempData';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CatagoriesListSecreen = ({route, navigation}) => {
  const [NamedWishListData, setNamedWishListData] = useState ([]);
  const [DefaultWishListData, setDefaultWishListData] = useState ([]);
  let {name} = route.params;
  let {WishListData} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  useEffect (async () => {
    try {
      const valueNamed = await AsyncStorage.getItem ('WishlistNames');
      if (valueNamed !== null) {
        let dataNamed = JSON.parse (valueNamed);
        setNamedWishListData (dataNamed);
      }
    } catch (e) {
      console.log ('read error', e);
    }
    try {
      const value = await AsyncStorage.getItem ('WishlistDaultArray');
      if (value !== null) {
        let data = JSON.parse (value);
        setDefaultWishListData (data);
      }
    } catch (e) {
      console.log ('read error', e);
    }
  }, []);

  return (
    <View>
      <Header name={HeaderName} EditButton={false} ScreenName={true} />
      {WishListData
        ? <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              {NamedWishListData &&
                NamedWishListData.map ((item, index) => {
                  return item.Array.map ((item, index) => {
                    return <ItemsProduct key={index} Data={item} />;
                  });
                })}
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              {DefaultWishListData &&
                DefaultWishListData.map ((item, index) => {
                  return <ItemsProduct key={index} Data={item} />;
                })}
            </View>
          </ScrollView>
        : <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              {TempDataCategoriesTag &&
                TempDataCategoriesTag.map ((item, index) => {
                  return <ItemsProduct key={index} Data={item} />;
                })}
            </View>
          </ScrollView>}
    </View>
  );
};

export default CatagoriesListSecreen;
