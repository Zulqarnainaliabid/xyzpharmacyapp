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
    navigation.goBack();
  }
  function HandleGotoDetailsSecreen(name) {
    navigation.push('DetailsSecreenSecreen', {
      name: name,
    });
  }
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <Header
        name={HeaderName}
        fun={HandleGoBackToHomeSecreen}
        ScreenName={true}
      />
      <View style={styles.OutercontainerDetailScreen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{marginTop:12,fontSize:18}}>{HeaderName}</Text>
          <View>
            <Swiper
             dot={<View style={{backgroundColor:'#FFFFFF',borderWidth:1,borderColor:"#ACACAC", width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
             activeDotColor="#F17B42"
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
                marginRight: 4,
                color: '#E4003B',
                fontSize: 20,
                fontWeight: '700',
                marginTop: 3,
              }}>
              Rs 1730
            </Text>
            <Text style={{marginRight: 3, marginTop: 11, fontSize: 11,color:"#A3A3A3",textDecorationLine: 'line-through'}}>
              Rs 1840
            </Text>
            <Text
              style={{
                fontSize:13,
                marginRight: 15,
                marginTop: 3,
                backgroundColor: '#E7013A',
                borderRadius: 11,
                color: 'white',
                fontWeight:"700",
                paddingHorizontal:7,
                // paddingVertical:3,
                height:23,
                paddingVertical:2,
                marginTop:4,
              
              }}>
              6% OFF
            </Text>
            {/* <Heart isClick={isClick}  /> */}
            <Text style={{marginLeft: 17, marginTop: 5}}>Hurt</Text>
            <Text style={{marginLeft: 5, marginTop: 5,fontSize:15,color:"#484848"}}>8x1.5 Litre</Text>
          </View>
          <Text style={{marginTop: 12, fontWeight: '700', fontSize: 18}}>
            More Vegetables
          </Text>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
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
