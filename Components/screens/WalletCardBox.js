import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
<i class="far fa-credit-card"></i>;
import {WalletCardIcon} from '../Icons';
export default function WalletCardBox(props) {
  return (
    <View style={[styles.OuterWraperCardsBox]}>
      <Text style={{fontSize: 17, color: '#84939D', fontWeight: '600'}}>
        Cards
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 22}}>
        <Text>{WalletCardIcon}</Text>
        <Text
          style={{
            marginLeft: 12,
            fontSize: 14,
            marginTop: -2,
            color: '#A7AFB5',
            // borderWidth: 1,
            width: 255,
          }}>
          Add a Card to enjoy a seemles payments experience
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CardsDetailsScreen');
        }}>
        <Text style={[styles.AddcardButton,styles.AddcardButtonWalletScreen]}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}
