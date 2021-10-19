import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import MyCarousel from './Slider';
import styles from './Style';
import Products from './Product';
import TopBrand from './TopBrand';
import YoungPeopleBuySection from './YoungPeopleBuySection';
import CatagoriesTag from './CatagoriesTags';
import ItemsProduct from './ItemsProducts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import {
  TempDataTopSlleer,
  TempDataFeatureProduct,
  TempDataFruitsAndVegatbles,
  TempDataDaalain,
  TempDataFruitsAndVegatblesOuter,
  TempDataCategoriesTag,
} from './TempData';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const img = require ('./Images/FreeClub.webp');
export default function HomPage({navigation}) {
  const [ToggleHeader, setToggleHeader] = useState (false);
  const [CartData, setCartData] = useState (
   [ 
     {data:TempDataCategoriesTag},
     {data:TempDataFeatureProduct},
     {data:TempDataTopSlleer},
     {data:TempDataFruitsAndVegatbles},
     {data:TempDataDaalain},
]
  );
  function HandleGotoMemberShipScreen () {
    navigation.navigate ('MemberShipScreen', {
      name: 'GrocerClub Membership mmmm',
    });
  }
  useEffect(() => {
    getData()
  }, [])
  const getData = async() => {
    // AsyncStorage.clear();
    try {
      const value = await AsyncStorage.getItem (JSON.stringify ("CartData"));
      if (value !== null) {
        let data = JSON.parse (value);
        setCartData(data)
      }
    } catch (e) {
      console.log ('read error', e);
    }
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <Header
        ToggleHeader={ToggleHeader}
        EditButton={false}
        ScreenName={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Outercontainer}>
          <MyCarousel />
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Featured products'}
              TempDataArray={CartData[1].data}
              CartData={CartData}
              getData={getData}
              outerIndex={1}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}
          >
            <View style={{width: 335, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Top Sellers'}
              TempDataArray={CartData[2].data}
              CartData={CartData}
              getData={getData}
              outerIndex={2}
            />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <TopBrand />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Fruits & Vegetables'}
              TempDataArray={CartData[3].data}
              CartData={CartData}
              outerIndex={3}
              // setCartData={setCartData}
              getData={getData}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}
          >
            <View style={{width: 335, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>

          <View style={styles.OutercontainerdProduct}>
            <YoungPeopleBuySection />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Daalain, Rice & Flour'}
              TempDataArray={CartData[4].data}
              CartData={CartData}
              outerIndex={4}
              getData={getData}
            />
          </View>
          {TempDataFruitsAndVegatblesOuter &&
            TempDataFruitsAndVegatblesOuter.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -10,
                    marginVertical: 5,
                  }}
                >
                  <CatagoriesTag Data={item} />
                </View>
              );
            })}
          <View style={styles.TextHolderMoreLove}>
            <Text
              style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}
            >
              More To Love
            </Text>
          </View>
          <View style={styles.OuterContainerItemProduct}>
            {CartData[0].data &&
              CartData[0].data.map ((item, index) => {
                return <ItemsProduct 
                key   = {index} 
                Data  = {item}
                index = {index}
                list  = {CartData}
                name  = {"Categories"}
                CartData={CartData}
                outerIndex={0}
                TempDataArray={CartData[0].data}
                getData={getData}
                />;
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
