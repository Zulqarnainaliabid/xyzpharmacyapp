import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../Header';
import DeliveryCharges from './DeliveryCharges';
export function MemberShipPlan(props) {
  return (
    <View style={styles.OutercontainerMemberShipPlan}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#D79374', fontSize: 18, fontWeight: '400'}}>
          3 Months membership Plan
        </Text>
        <View>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 16,
              color: '#979797',
              textDecorationLine: 'line-through',
            }}>
            {props.data.AmountLess}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 20,
              color: '#000000',
              fontWeight: '600',
              marginTop: -5,
            }}>
            {props.data.ActualAmount}
          </Text>
        </View>
      </View>
      <Text style={{color: '#7FC0AC', fontSize: 18, textAlign: 'right'}}>
        You save Rs 200
      </Text>
      <Text
        style={{
          color: '#FEE3CA',
          backgroundColor: '#FF783E',
          paddingVertical: 15,
          paddingHorizontal: 5,
          fontSize: 17,
          textAlign: 'center',
          marginVertical: 20,
        }}>
        SIGN IN TO PAY WITH GROCER WALLET
      </Text>
      <View
        style={{
          borderTopWidth: 1,
          marginHorizontal: -16,
          borderColor: '#F2F2F2',
        }}>
        <Text
          style={{
            color: '#868686',
            paddingVertical: 12,
            paddingHorizontal: 17,
            fontSize: 17,
            textAlign: 'left',
          }}>
          Pay for grocerapp with grocerapp wallet. Any negative balance will be
          adjusted with your next order. Clear negative balance within 30 days
          to enjoy uninterrupted membership. The plan will auto-resubscribe when
          its duration will end.
        </Text>
      </View>
    </View>
  );
}

export default function PlansScreen({route, navigation}) {
  let {name} = route.params;
  let {OtherData} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
        EditButton={false}
      />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.OutercontainerPlansScreen}>
            <Text
              style={{
                marginVertical: 20,
                fontSize: 18,
                color: '#0E0E0E',
                fontWeight: '600',
              }}>
              Membership Summary
            </Text>
            <MemberShipPlan data={OtherData} />
            <Text
              style={{
                marginVertical: 20,
                fontSize: 18,
                color: '#0E0E0E',
                fontWeight: '600',
              }}>
              Membership Features
            </Text>
            <View
              style={{
                marginBottom: 20,
              }}>
              <DeliveryCharges />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
