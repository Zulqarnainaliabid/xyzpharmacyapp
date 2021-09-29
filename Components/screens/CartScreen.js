import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image,TouchableOpacity} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
const img = require('../Images/UnileverBrand.webp');
const CartScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const ItemAray = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View style={{flex: 1, borderWidth: 1, paddingHorizontal: 19}}>
        <ProgressSteps
          borderWidth={3}
          borderStyle={{borderWidth: 13, width: 12}}
          activeStepIconBorderColor="#44A903"
          labelFontSize={12}
          topOffset={15}
          progressBarColor="#777777"
          disabledStepIconColor="#777777"
          labelColor="#777777"
          activeLabelColor="#6CA24B"
          disabledStepNumColor="#767676"
          // completedProgressBarColor="#9457EB"
          // progressBarColor="#9457EB"
          // completedStepNumColor="#9457EB"
          // completedCheckColor="#9457EB"
          completedLabelColor="#44A703">
          <ProgressStep removeBtnRow={true} label="1.Your Bill">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 1!</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="2.Place Holder">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="3.Completed">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      <View style={{backgroundColor: '#F8F8F8', padding: 22}}>
        <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
          Your cart is empty
        </Text>
        <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
          let's fill it by adding some item
        </Text>
        <TouchableOpacity>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            backgroundColor: '#FF783E',
            display: 'flex',
            paddingVertical: 10,
            paddingHorizontal: 17,
            marginVertical: 20,
            borderRadius: 3,
            fontSize: 17,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          Start Shopping
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
