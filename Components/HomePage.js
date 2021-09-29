import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import MyCarousel from './Slider';
import styles from './Style';
import Products from './Product';
import TopBrand from './TopBrand';
import YoungPeopleBuySection from './YoungPeopleBuySection';
import CatagoriesTag from './CatagoriesTags';
import ItemsProduct from './ItemsProducts';
import Header from './Header';
import 'react-native-gesture-handler';
const img = require('./Images/FreeClub.webp');
export default function HomPage({navigation}) {
  const [ToggleHeader, setToggleHeader] = useState(false);
  const [CatagorisTagArray, setCatagorisTagArray] = useState([
    {select: false},
    {select: false},
    {select: false},
  ]);

  function HandleGotoMemberShipScreen() {
    navigation.navigate('MemberShipScreen', {
      name: 'GrocerClub Membership mmmm',
    });
  }
  return (
    <>
      <Header ToggleHeader={ToggleHeader} ScreenName={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Outercontainer}>
          <MyCarousel />
          <View style={styles.OutercontainerdProduct}>
            <Products name={'Featured products'} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}>
            <View style={{width: 347, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>
          <View style={styles.OutercontainerdProduct}>
            <Products name={'Top Sellers'} />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <TopBrand />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products name={'Fruits & Vegetables'} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}>
            <View style={{width: 347, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>

          <View style={styles.OutercontainerdProduct}>
            <YoungPeopleBuySection />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products name={'Daalain, Rice & Flour'} />
          </View>
          {CatagorisTagArray &&
            CatagorisTagArray.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -5,
                    marginVertical: 5,
                  }}>
                  <CatagoriesTag />
                </View>
              );
            })}
          <View style={styles.TextHolderMoreLove}>
            <Text
              style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}>
              More To Love
            </Text>
          </View>
          <View style={styles.OuterContainerItemProduct}>
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
