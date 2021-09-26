import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
import Swiper from 'react-native-swiper';
import DeliveryCharges from './DeliveryCharges';
import Pakges from './Pakges';
import FaqsScreen from './FaqsScreen';
const img = require('../Images/FreeClub.webp');

const MemberShipScreen = ({route, navigation}) => {

  function HandleGotoPlansScreenScreen(data) {
    navigation.navigate('PlansScreen', {
      name: 'Pay For MemberShip',
      OtherData:data,
    });
  }

  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function HandleGoBackToHomeSecreen() {
    navigation.goBack();
  }
 
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        name={HeaderName}
        fun={HandleGoBackToHomeSecreen}
        ScreenName={false}
      />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.OutercontainerClubScreen}>
            <View
              style={{
                width: 347,
                marginVertical: 5,
                marginTop: 55,
                backgroundColor: '#FFFFFF',
              }}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 32,
                fontSize: 16,
                color: '#2B2B2B',
                marginBottom: 25,
              }}>
              Select the plan which suit your needs
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Pakges HandleGotoPlansScreenScreen={HandleGotoPlansScreenScreen}  ActualAmount={299} AmountLess={499} />
              <Pakges HandleGotoPlansScreenScreen={HandleGotoPlansScreenScreen}  ActualAmount={499} AmountLess={799} />
              <Pakges HandleGotoPlansScreenScreen={HandleGotoPlansScreenScreen}  ActualAmount={899} AmountLess={1399}/>
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 32,
                fontSize: 16,
                color: '#2B2B2B',
                marginBottom: 25,
              }}>
              You can cancle anytime within 15 days
            </Text>
            <DeliveryCharges />
            <View style={{marginVertical: 25}}>
              <DeliveryCharges />
            </View>
          </View>
          <Text style={{backgroundColor: '#D7D7D7', padding: 12, fontSize: 18}}>
            FAQs
          </Text>
          <View>
            <FaqsScreen />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MemberShipScreen;
