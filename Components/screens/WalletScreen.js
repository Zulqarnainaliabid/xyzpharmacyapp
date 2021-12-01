import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../Header';
import BalanceBox from './BalanceBoxScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WalletCardBox from './WalletCardBox';
{
  /* <i class="fal fa-check"></i>; */
}

const img = require ('../Images/checkit.png');
export const Check = (
  <FontAwesome5 style={{fontSize: 20, color: '#1CAB46'}} name={'check'} />
);
export const EasyPAisa = (
  <FontAwesome5 style={{fontSize: 20, color: '#84959F'}} name={'money-bill'} />
);
export const Card = (
  <FontAwesome5
    style={{fontSize: 20, color: '#84959F'}}
    name={'credit-card'}
    solid
  />
);
export const Cash = (
  <FontAwesome5
    style={{fontSize: 30, color: '#84959F'}}
    name={'edge-legacy'}
    solid
  />
);
export function PaymentMethod (props) {
  return (
    <View
      style={{
        // borderWidth: 1,
        backgroundColor: 'white',
        // marginTop: 12,
        marginHorizontal: -16,
        paddingHorizontal: 15,
        // paddingTop: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          paddingBottom: 15,
          borderColor: '#E8E8E8',
        }}
      >
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>{props.icon}</Text>
          <Text
            style={{textAlignVertical: 'center', marginLeft: 12, fontSize: 15}}
          >
            {props.name}
          </Text>
        </View>
        <View style={{width: 20, height: 20}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
            }}
            source={img}
            tintColor="#1DAB47"
          />
        </View>
      </View>
    </View>
  );
}
export default function Wallet({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header name={'wallet'} EditButton={false} ScreenName={false} />
      <View
        style={{
          // borderWidth: 1,
          flex: 1,
          backgroundColor: '#F5F5F5',
          padding: 15,
        }}
      >
        <BalanceBox />
        <View style={{marginTop: 12}}>
          <WalletCardBox navigation={navigation} />
        </View>
        <Text style={{marginVertical: 9, fontSize: 16}}>
          Current payment method
        </Text>
        <PaymentMethod icon={EasyPAisa} name={'Cash on Delivery'} />
        <PaymentMethod icon={EasyPAisa} name={'Cash on Delivery'} />
        <PaymentMethod icon={EasyPAisa} name={'Cash on Delivery'} />
      </View>
    </View>
  );
}
