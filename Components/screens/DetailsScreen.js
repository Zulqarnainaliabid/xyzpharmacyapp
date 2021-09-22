import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
import Swiper from 'react-native-swiper';
import Heart from 'react-animated-heart';
import ProductsBox from '../ProductBox';
const img1 = require('../Images/nurpur1.webp');
const img2 = require('../Images/nurpur2.webp');
const img3 = require('../Images/nurpur3.webp');
const DetailsScreen = ({route, navigation}) => {
  const [isClick, setClick] = useState(false);
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function HandleGoBackToHomeSecreen() {
    navigation.goBack()
  }
  function HandleGotoDetailsSecreen(name) {
    navigation.push('DetailsSecreenSecreen', {
      name: name,
    });
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header name={HeaderName} fun={HandleGoBackToHomeSecreen} ScreenName={true} />
      <View style={styles.OutercontainerDetailScreen}>
        <ScrollView>
          <Text>{HeaderName}</Text>
          <View>
            <Swiper
              autoplay={true}
              showsButtons={false}
              style={{
                display: 'flex',
                justifyContent: 'center',
                height: 212,
                backgroundColor: 'white',
              }}>
              <View style={styles.OuterWraperImageHolderDetailScreen}>
                <Image style={{width: '100%', height: 150}} source={img1} />
              </View>
              <View style={styles.OuterWraperImageHolderDetailScreen}>
                <Image style={{width: '100%', height: 150}} source={img2} />
              </View>
              <View style={styles.OuterWraperImageHolderDetailScreen}>
                <Image style={{width: '100%', height: 150}} source={img3} />
              </View>
            </Swiper>
          </View>
          <View style={styles.OuterWraperDetailTextHolderDetailsScreen}>
            <Text
              style={{
                marginRight: 10,
                color: 'red',
                fontSize: 19,
                fontWeight: '700',
                marginTop: 3,
              }}>
              Rs 1730
            </Text>
            <Text style={{marginRight: 10, marginTop: 7, fontSize: 13}}>
              Rs 1840
            </Text>
            <Text
              style={{
                marginRight: 55,
                marginTop: 3,
                backgroundColor: 'red',
                padding: 3,
                borderRadius: 10,
                color: 'white',
              }}>
              6% OFF
            </Text>
            {/* <Heart isClick={isClick}  /> */}
            <Text style={{marginLeft: 17, marginTop: 5}}>Hurt</Text>
            <Text style={{marginLeft: 5, marginTop: 5}}>5 litter</Text>
          </View>
          <Text style={{marginTop: 12, fontWeight: '700', fontSize: 18}}>
            More Vegetables
          </Text>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <ScrollView horizontal={true}>
              <View style={{marginLeft: 5, marginRight: 5}}>
                <ProductsBox funHandlegotoDetails={HandleGotoDetailsSecreen} />
              </View>
              <View style={{marginLeft: 5, marginRight: 5}}>
                <ProductsBox funHandlegotoDetails={HandleGotoDetailsSecreen} />
              </View>
              <View style={{marginLeft: 5, marginRight: 5}}>
                <ProductsBox funHandlegotoDetails={HandleGotoDetailsSecreen} />
              </View>
              <View style={{marginLeft: 5, marginRight: 5}}>
                <ProductsBox funHandlegotoDetails={HandleGotoDetailsSecreen} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.OuterContainerCatagoriesList}>
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;
