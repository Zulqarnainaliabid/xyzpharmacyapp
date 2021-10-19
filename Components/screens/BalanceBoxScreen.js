import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Header';
export default function BalanceBox(props) {
  return (
    <View style={styles.OuterWraperBalanceBox}>
      <Text style={{fontSize: 20}}>Available balance </Text>
      <View style={styles.OuterTextHolderPKR}>
        <Text style={[styles.TextHolderPkrAvailbleBalance]}>PKR</Text>
        <Text style={[styles.TextHolderPriceAvailbleBalance]}>0</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <View style={{marginHorizontal: 12}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.TextHolderBalance}> Personal balance </Text>
            <Text style={styles.textHolderQuestionMArk}>?</Text>
          </View>
          <View style={styles.OuterTextHolderPKR}>
            <Text style={styles.TextHolderPkr}>PKR</Text>
            <Text style={[styles.TextHolderPrice]}>0</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 12}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.TextHolderBalance}> Promotional balance </Text>
            <Text style={styles.textHolderQuestionMArk}>?</Text>
          </View>
          <View style={styles.OuterTextHolderPKR}>
            <Text style={styles.TextHolderPkr}>PKR</Text>
            <Text style={[styles.TextHolderPrice]}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
