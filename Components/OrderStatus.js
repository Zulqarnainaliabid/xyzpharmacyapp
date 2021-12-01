import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function OrderStatus () {
const navigation = useNavigation();
  return (
    <View
      style={{
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 12,
        marginTop: 12,
        borderColor: '#D8D8D8',
        borderRadius: 5,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>Order Status:</Text>
          <Text style={{fontWeight: '700'}}>Order Placed</Text>
        </View>
        <TouchableOpacity onPress={()=>{
        navigation.navigate('OrderDetailsScreen',{ name: 'Order Detail',});
    }}>
        <Text
          style={{
            backgroundColor: '#FF783E',
            paddingHorizontal: 7,
            color: 'white',
            paddingVertical: 8,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2,
          }}
        >
          Track or cancle
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text>Order #:</Text>
        <Text style={{fontWeight: '700'}}>Order Placed</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
        <Text>Delivery Time Slot:</Text>
        <Text style={{fontWeight: '700'}}>Order Placed</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
        <Text>Delivery Date:</Text>
        <Text style={{fontWeight: '700'}}>Order Placed</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
        <Text>PAyment Code:</Text>
        <Text style={{fontWeight: '700'}}>Order Placed</Text>
      </View>
    </View>
  );
}
