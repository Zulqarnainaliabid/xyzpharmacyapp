import React from 'react';
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HealpCentreFooter from './HealpCentreFooter';
import HealpCentreHeader from './HealpCentreHeader';
export default function HelpCentreDeliverySlots (props) {
  const Duration = [
    {name: '08:00 am to 10:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 12:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 2:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 4:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 6:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 8:30 am (Orders close at 05:00 am)'},
    {name: '08:00 am to 8:30 am (Orders close at 05:00 am)'},
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4F5F7'}}>
        <HealpCentreHeader 
         setToggleScreenHelpCentre={props.setToggleScreenHelpCentre}
        />
        <View
          style={{
            paddingHorizontal: 25,
            backgroundColor: 'white',
            paddingVertical: 22,
          }}
        >
          <Text style={{fontSize: 20}}>Delivery Slots</Text>
          <Text style={{color: '#888B94', marginTop: 10}}>
            What are available delivery slots?
          </Text>
          <View
            style={{display: 'flex', flexDirection: 'row', marginVertical: 12}}
          >
            <Text
              style={{
                backgroundColor: '#F7600F',
                textAlignVertical: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 30,
              }}
            >
              W
            </Text>
            <View style={{marginLeft: 8}}>
              <Text style={{color: '#ACAEB5'}}>Written by wafa Allay</Text>
              <Text style={{color: '#ACAEB5'}}>updated over a week ago </Text>
            </View>
          </View>
          <Text style={{marginVertical: 12, fontSize: 15, color: '#94969C'}}>
            We have multiple delivery slots thoughout the day:
          </Text>

          <Text style={{marginVertical: 12, fontSize: 15}}>
            Lahore:
          </Text>
          {Duration.map ((item, index) => {
            return (
              <Text key={index} style={{fontSize: 12, marginBottom: 12}}>{item.name}</Text>
            );
          })}
          <Text style={{marginVertical: 12, fontSize: 15}}>
            Islamabad/Rawalpindi:
          </Text>
          {Duration.map ((item, index) => {
            return (
              <Text key={index} style={{fontSize: 12, marginBottom: 12}}>{item.name}</Text>
            );
          })}
          <Text style={{marginVertical: 12, fontSize: 15}}>
            Faslabad:
          </Text>
          {Duration.map ((item, index) => {
            return (
              <Text key={index} style={{fontSize: 12, marginBottom: 12}}>{item.name}</Text>
            );
          })}
          <Text style={{fontSize: 13, color: '#5C5C65', marginBottom: 30,lineHeight:19}}>
            We deliver the freshest produce and a huge variety of grocery items throught the week, so all you have to do is fill up your cart, choose you preferred delivery slot.
          </Text>
          <View style={{marginBottom: 12}}>
            <HealpCentreFooter />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
