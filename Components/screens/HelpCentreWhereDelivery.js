import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HealpCentreFooter from './HealpCentreFooter';
import HealpCentreHeader from './HealpCentreHeader';
export default function HelpCentreWhereDelivery (props) {
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
          <Text style={{fontSize: 26,lineHeight:36}}>Where is my order/Delayed delivery</Text>
          <Text style={{color: '#888B94', marginTop: 10}}>
            How to find your order delivery time and status?
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
          <Text style={{marginVertical: 12, fontSize: 15, color: '#4C4C55',lineHeight:20}}>
            Your rider should be on his way and may be delayed due to some unforeseen
            circumstances. To check your delivery status, go 
            to menu and click on "My Orders". You should be able to see a complete list of your orders, 
            choose the order you are looking to get
            information on and you will see all the details about your order status.
          </Text>

          <Text style={{marginVertical: 12, fontSize: 15,color:"#4C4C55"}}>
           we update your ordr status, every step of the way. 
          </Text>
          <View style={{marginBottom: 12}}>
            <HealpCentreFooter />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
