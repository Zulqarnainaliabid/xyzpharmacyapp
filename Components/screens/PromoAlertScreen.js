import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
const img = require('../Images/promo.png');
export function PromoAlertScreenBox() {
  return (
    <View style={styles.OuterWraperPromoAlertScreenBox}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        <Image
          style={{
            width: '100%',
            height: 160,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            marginTop:-2,
          }}
          source={img}
        />
      </View>
      <View style={{padding: 12}}>
        <View style={{display: 'flex', flexDirection: 'row',justifyContent:"space-between"}}>
          <Text style={{color: '#000000',fontSize:17}}>Month End Sale is LIVE :) </Text>
          <Text style={{color: '#8F8F8F'}}>1 day ego</Text>
        </View>
        <Text style={{color: '#8F8F8F',marginBottom:19,marginTop:12,fontSize:15}}>
          Use code "MS200" for Rs200 CashBack! Min.
          <Text>order value:Rs.3000</Text>
        </Text>
        <View style={{display: 'flex', flexDirection: 'row',justifyContent:"space-between"}}>
          <Text style={{color: '#CD6761',fontSize:16,textAlignVertical:"bottom"}}>Expires in 3 Days </Text>
          <Text style={{color: '#FFFFFF',backgroundColor:"#FF783E",paddingVertical:7,fontSize:16,paddingHorizontal:17,borderRadius:3,}}>Apply</Text>
        </View>
      </View>
    </View>
  );
}
const PromoAlertScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const ItemAray = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
        EditButton={false}
      />

      <View style={{flex: 1, backgroundColor: '#F2F6F9'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {ItemAray.map((item, index) => {
            return (
              <View key={index} style={{marginVertical: 2, padding: 12}}>
                <PromoAlertScreenBox />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default PromoAlertScreen;
