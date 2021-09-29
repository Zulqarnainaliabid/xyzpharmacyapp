import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header';
const image = require('../Images/BackImage.jpg');
const OrderScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View style={{flex: 1, justifyContent: 'center', padding: 12}}>
        <Text style={{color: '#2A2A2A', textAlign: 'center'}}>
          Let's create your first order!
        </Text>
        <Text style={{color: '#2A2A2A', textAlign: 'center'}}>
          to verify your identity
        </Text> 
        <TouchableOpacity>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            backgroundColor: '#FF783E',
            display: 'flex',
            paddingVertical: 12,
            paddingHorizontal: 17,
            marginVertical: 22,
            borderRadius: 3,
            fontSize: 14,
            fontWeight: '700',
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#767676',
              textAlign: 'center',
              marginBottom: 17,
              fontWeight: '700',
              marginTop: 3,
            }}>
            or
          </Text>
          <TouchableOpacity >
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 17,
                fontWeight: '700',
                color: '#FF783E',
                marginHorizontal: 6,
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#767676',
              textAlign: 'center',
              marginBottom: 17,
              fontWeight: '700',
              marginTop: 3,
            }}>
            to see order history
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default OrderScreen;
